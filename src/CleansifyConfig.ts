export class CleansifyConfig {
  maxLength: number = 100;
  replacement: string = "_";
  case: 'default' | 'lower' | 'upper' | 'kebab' = 'default';
}
