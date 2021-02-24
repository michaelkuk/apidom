import stampit from 'stampit';
import { ArrayElement, Element, BREAK } from 'apidom';

import FallbackVisitor from '../FallbackVisitor';
import SpecificationVisitor from '../SpecificationVisitor';
import { isReferenceLikeElement, isParameterLikeElement } from '../../predicates';
import { appendMetadata } from '../../metadata';

const ParametersVisitor = stampit(SpecificationVisitor, FallbackVisitor, {
  init() {
    this.element = new ArrayElement();
  },
  methods: {
    ArrayElement(arrayElement: ArrayElement) {
      arrayElement.forEach((item: Element): void => {
        if (isReferenceLikeElement(item)) {
          const referenceElement = this.toRefractedElement(
            ['document', 'objects', 'Reference'],
            item,
          );
          referenceElement.setMetaProperty('referenced-element', 'parameter');
          this.element.push(referenceElement);
        } else if (isParameterLikeElement(item)) {
          const parameterElement = this.toRefractedElement(
            ['document', 'objects', 'Parameter'],
            item,
          );
          this.element.push(parameterElement);
        } else {
          const element = item.clone();
          this.element.push(element);
        }
      });

      this.copyMetaAndAttributes(arrayElement, this.element);
      appendMetadata(['parameters'], this.element);

      return BREAK;
    },
  },
});

export default ParametersVisitor;
