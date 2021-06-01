import { STRINGS_PT_BR } from './translation_ptBR';
import { STRINGS_ES } from './translation_es';
import { LANGUAGE } from '../../utils';

export function getText() {
  switch (LANGUAGE) {
    case 'BR':
      return STRINGS_PT_BR;
    case 'AR':
    default:
      return STRINGS_ES;
  }
}

