const initialTheme = () => {
  const localTheme = localStorage.getItem('theme');
  if (!localTheme) {
    localStorage.setItem('theme', 'dark')
    return 'dark'
  } else {
    return localTheme
  }
}

const initialState = {
  theme: initialTheme()
}

export const themeReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'SET_THEME':
      const currentTheme = localStorage.getItem('theme')
      localStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark')
      return {
        theme: localStorage.getItem('theme')
      }
    default: return state
  }
}
