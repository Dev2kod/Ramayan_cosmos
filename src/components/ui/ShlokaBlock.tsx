import type { Shloka } from '../../data/types';

const KANDA_FROM_NUM: Record<string, string> = {
  '1': 'Bala Kanda',
  '2': 'Ayodhya Kanda',
  '3': 'Aranya Kanda',
  '4': 'Kishkindha Kanda',
  '5': 'Sundara Kanda',
  '6': 'Yuddha Kanda',
  '7': 'Uttara Kanda',
};

/** Renders a Valmiki verse with transliteration, translation and citation. */
export function ShlokaBlock({ shloka }: { shloka: Shloka }) {
  const parts = shloka.ref.split('.');
  const book = KANDA_FROM_NUM[parts[0]];
  const cite = book ? `${book} ${parts.slice(1).join('.')}` : shloka.ref;

  return (
    <figure className="shloka">
      <p className="shloka-deva">{shloka.devanagari}</p>
      {shloka.transliteration && <p className="shloka-iast">{shloka.transliteration}</p>}
      <p className="shloka-tr">“{shloka.translation}”</p>
      <figcaption className="shloka-meta">
        <span>{shloka.context}</span>
        <span className="shloka-ref">Vālmīki Rāmāyaṇa {cite}</span>
      </figcaption>
    </figure>
  );
}
