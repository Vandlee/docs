import { createRender } from '@u-shii/internal-markdown';
import { LANGUAGES_IGNORE_PAGES } from '../../../config';

const notSpanishJsonRegExp = /-([a-z]{2})\.json$/;

export default function mapApiPageTranslations(req) {
  const headingHashes = {};
  const translations = {};

  // Process the Spanish markdown before the other locales.
  // Spanish ToC anchor links are used in all languages
  let filenames = [];
  req.keys().forEach((filename) => {
    if (filename.match(notSpanishJsonRegExp)) {
      filenames.push(filename);
    } else {
      filenames = [filename].concat(filenames);
    }
  });

  filenames.forEach((filename) => {
    const matchNotSpanishMarkdown = filename.match(notSpanishJsonRegExp);
    const userLanguage = matchNotSpanishMarkdown !== null ? matchNotSpanishMarkdown[1] : 'en';
    const translation = req(filename) || null;

    if (translation !== null && translation.componentDescription) {
      const componentDescriptionToc = [];
      const render = createRender({
        headingHashes,
        toc: componentDescriptionToc,
        userLanguage,
        location: filenames,
        options: {
          ignoreLanguagePages: LANGUAGES_IGNORE_PAGES,
          env: {
            SOURCE_CODE_REPO: '',
          },
        },
      });
      translation.componentDescription = render(translation.componentDescription);
      translation.componentDescriptionToc = componentDescriptionToc;
    }

    translations[userLanguage] = translation;
  });

  return translations;
}
