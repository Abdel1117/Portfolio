export const ThemeScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function getTheme() {
              const stored = localStorage.getItem('theme');
              if (stored) return stored;
              return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            
            const theme = getTheme();
            const root = document.documentElement;
            
            if (theme === 'dark') {
              root.classList.add('dark');
            } else {
              root.classList.remove('dark');
            }
          })();
        `,
      }}
    />
  );
};
