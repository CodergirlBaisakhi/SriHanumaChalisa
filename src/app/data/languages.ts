import { Language } from '../models/chalisa.model';

export const LANGUAGES: Language[] = [
  {
    id: 'hindi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    script: 'devanagari',
    aliases: ['hindi', 'हिन्दी', 'हिंदी', 'hindustani', 'awadhi', 'devanagari'],
  },
  {
    id: 'odia',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    script: 'odia',
    aliases: ['odia', 'oriya', 'ଓଡ଼ିଆ', 'odisha', 'orissa', 'odia chalisa', 'oriya chalisa'],
  },
  {
    id: 'english',
    name: 'English',
    nativeName: 'English',
    script: 'roman',
    aliases: ['english', 'en', 'roman', 'latin', 'iast'],
  },
  {
    id: 'bengali',
    name: 'Bengali',
    nativeName: 'বাংলা',
    script: 'bengali',
    aliases: ['bengali', 'bangla', 'বাংলা', 'bengal'],
  },
  {
    id: 'tamil',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    script: 'tamil',
    aliases: ['tamil', 'தமிழ்', 'tamizh'],
  },
  {
    id: 'telugu',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    script: 'telugu',
    aliases: ['telugu', 'తెలుగు'],
  },
  {
    id: 'kannada',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    script: 'kannada',
    aliases: ['kannada', 'ಕನ್ನಡ', 'kanarese'],
  },
  {
    id: 'malayalam',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    script: 'malayalam',
    aliases: ['malayalam', 'മലയാളം'],
  },
  {
    id: 'gujarati',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    script: 'gujarati',
    aliases: ['gujarati', 'ગુજરાતી', 'gujarat'],
  },
  {
    id: 'marathi',
    name: 'Marathi',
    nativeName: 'मराठी',
    script: 'devanagari',
    aliases: ['marathi', 'मराठी', 'maharashtra'],
  },
  {
    id: 'punjabi',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    script: 'gurmukhi',
    aliases: ['punjabi', 'panjabi', 'ਪੰਜਾਬੀ', 'gurmukhi'],
  },
  {
    id: 'assamese',
    name: 'Assamese',
    nativeName: 'অসমীয়া',
    script: 'assamese',
    aliases: ['assamese', 'asamiya', 'অসমীয়া', 'oxomiya', 'assam'],
  },
];

export const DEFAULT_LANGUAGE_ID = 'hindi';
