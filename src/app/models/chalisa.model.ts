export type ScriptId =
  | 'devanagari'
  | 'odia'
  | 'roman'
  | 'bengali'
  | 'tamil'
  | 'telugu'
  | 'kannada'
  | 'malayalam'
  | 'gujarati'
  | 'gurmukhi'
  | 'assamese';

export interface Language {
  id: string;
  name: string;
  nativeName: string;
  script: ScriptId;
  aliases: string[];
}

export interface SourceVerse {
  id: string;
  type: 'doha' | 'chaupai';
  number?: number;
  hindi: string[];
  roman: string[];
  meaningEn: string;
}

export interface DisplayVerse {
  id: string;
  type: 'doha' | 'chaupai';
  number?: number;
  lines: string[];
  meaningEn: string;
}
