interface Spacing {
  space_1: number;
  space_2:number
}

export const SPACING: Spacing = {
  space_1: 30,
  space_2:20,
};
interface Color {
  primary: string;
  secondary: string;
  accent: string;
  contentPrimary: string;
  contentsecondary: string;
}

export const COLORS: Color = {
  primary: '#fff',
  secondary: '#000',
  accent: '#bfbfbf',
  contentPrimary: 'light-content',
  contentsecondary: 'dark-content',
};


interface FontSize {
  font_size_1: number;
  font_size_2: number;
  font_size_3: number;
}

export const FONTSIZE: FontSize = {
  font_size_1: 30,
  font_size_2: 18,
  font_size_3: 15,
};
