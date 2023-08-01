import { Themes } from 'types';

declare global {
  namespace Nvmd {
    interface Version {
      version: string;
      npm: string;
      lts: string | false;
      date: string;
      v8: string;
      files: string[];
    }

    type Versions = Array<Version>;

    interface ProgressData {
      percent: number;
      transferred: number;
      total: number;
    }

    interface Setting {
      locale: string;
      theme: Themes;
      mirror: string;
    }
  }
}
