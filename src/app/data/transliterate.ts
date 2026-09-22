import { ScriptId } from '../models/chalisa.model';

const DEVANAGARI_START = 0x0900;
const DEVANAGARI_END = 0x097f;

const OFFSET_SCRIPTS: Partial<Record<ScriptId, number>> = {
  bengali: 0x0980,
  gurmukhi: 0x0a00,
  gujarati: 0x0a80,
  odia: 0x0b00,
  telugu: 0x0c00,
  kannada: 0x0c80,
  malayalam: 0x0d00,
};

const TAMIL_MAP: Record<string, string> = {
  '\u0905': '\u0B85',
  '\u0906': '\u0B86',
  '\u0907': '\u0B87',
  '\u0908': '\u0B88',
  '\u0909': '\u0B89',
  '\u090A': '\u0B8A',
  '\u090B': '\u0BB0\u0BC1',
  '\u090F': '\u0B8E',
  '\u0910': '\u0B90',
  '\u0913': '\u0B92',
  '\u0914': '\u0B94',
  '\u0915': '\u0B95',
  '\u0916': '\u0B95',
  '\u0917': '\u0B95',
  '\u0918': '\u0B95',
  '\u0919': '\u0B99',
  '\u091A': '\u0B9A',
  '\u091B': '\u0B9A',
  '\u091C': '\u0B9C',
  '\u091D': '\u0B9C',
  '\u091E': '\u0B9E',
  '\u091F': '\u0B9F',
  '\u0920': '\u0B9F',
  '\u0921': '\u0B9F',
  '\u0922': '\u0B9F',
  '\u0923': '\u0BA3',
  '\u0924': '\u0BA4',
  '\u0925': '\u0BA4',
  '\u0926': '\u0BA4',
  '\u0927': '\u0BA4',
  '\u0928': '\u0BA8',
  '\u092A': '\u0BAA',
  '\u092B': '\u0BAA',
  '\u092C': '\u0BAA',
  '\u092D': '\u0BAA',
  '\u092E': '\u0BAE',
  '\u092F': '\u0BAF',
  '\u0930': '\u0BB0',
  '\u0932': '\u0BB2',
  '\u0935': '\u0BB5',
  '\u0936': '\u0BB6',
  '\u0937': '\u0BB7',
  '\u0938': '\u0BB8',
  '\u0939': '\u0BB9',
  '\u0933': '\u0BB3',
  '\u093E': '\u0BBE',
  '\u093F': '\u0BBF',
  '\u0940': '\u0BC0',
  '\u0941': '\u0BC1',
  '\u0942': '\u0BC2',
  '\u0943': '\u0BCD\u0BB0\u0BC1',
  '\u0947': '\u0BC6',
  '\u0948': '\u0BC8',
  '\u094B': '\u0BCA',
  '\u094C': '\u0BCC',
  '\u0902': '\u0BAE\u0BCD',
  '\u0903': ':',
  '\u0901': '\u0BAE\u0BCD',
  '\u094D': '\u0BCD',
  '\u093D': '\u0B85',
};

function offsetToScript(text: string, targetStart: number): string {
  let result = '';
  for (const ch of text) {
    const code = ch.codePointAt(0) ?? 0;
    if (code >= DEVANAGARI_START && code <= DEVANAGARI_END && code !== 0x0964 && code !== 0x0965) {
      result += String.fromCodePoint(targetStart + (code - DEVANAGARI_START));
    } else {
      result += ch;
    }
  }
  return result;
}

function toTamil(text: string): string {
  let result = '';
  for (const ch of text) {
    result += TAMIL_MAP[ch] ?? ch;
  }
  return result;
}

export function transliterate(text: string, script: ScriptId): string {
  if (script === 'devanagari' || script === 'roman') {
    return text;
  }
  if (script === 'tamil') {
    return toTamil(text);
  }
  if (script === 'bengali') {
    return offsetToScript(text, 0x0980).replaceAll('\u09B5', '\u09AC');
  }
  if (script === 'assamese') {
    return offsetToScript(text, 0x0980).replaceAll('\u09B0', '\u09F0');
  }
  const start = OFFSET_SCRIPTS[script];
  if (start) {
    return offsetToScript(text, start);
  }
  return text;
}
