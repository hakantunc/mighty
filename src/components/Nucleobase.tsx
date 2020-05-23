import React from 'react';

export enum Nucleobase {
  Adenine = 'Adenine',
  Cytosine = 'Cytosine',
  Guanine = 'Guanine',
  Thymine = 'Thymine',
  Uracil = 'Uracil',
}

interface NucleobaseProps {
  base: Nucleobase;
}

const NucleobaseComponent = (props: NucleobaseProps) => (
  <div>
    { props.base }
  </div>
);

export default NucleobaseComponent;
