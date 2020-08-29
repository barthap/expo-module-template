import { SampleOptions } from "./ModuleTemplate.types";

export default {
  get name(): string {
    return 'ExpoModuleTemplate';
  },
  someGreatMethodAsync(options: SampleOptions) {
    return Promise.resolve("Done some great web stuff!");
  }
};
