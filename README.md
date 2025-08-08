# JBartoszewicz - Template Astro

Template projektu oparty na Astro z gotową konfiguracją Tailwind CSS, ESLint i Prettier.

## 🚀 Technologie

Projekt wykorzystuje następujące technologie:

- [Astro](https://astro.build/) - wydajny framework do budowy stron statycznych
- [TailwindCSS](https://tailwindcss.com/) - narzędzie do stylowania UI
- [TypeScript](https://www.typescriptlang.org/) - typowany JavaScript
- [ESLint](https://eslint.org/) - linter dla JavaScript/TypeScript
- [Prettier](https://prettier.io/) - formatowanie kodu

## 📁 Struktura projektu

```text
/
├── public/          # Statyczne pliki (favicon, obrazy, itp.)
├── src/
│   ├── assets/      # Zasoby projektu (obrazy, czcionki, itp.)
│   ├── components/  # Komponenty Astro/React/Vue/itp.
│   ├── layouts/     # Szablony układów stron
│   ├── pages/       # Strony projektu (routing oparty na plikach)
│   └── styles/      # Globalne style
└── package.json
```

## ⚙️ Konfiguracja

Template zawiera gotową konfigurację:

- **Tailwind CSS** - zintegrowany z Astro
- **ESLint** - skonfigurowany z regułami dla TypeScript i Astro
- **Prettier** - skonfigurowany do współpracy z Tailwind CSS i ESLint

## 🧞 Komendy

Wszystkie komendy uruchamiane są z poziomu katalogu głównego:

| Komenda        | Działanie                                           |
| :------------- | :-------------------------------------------------- |
| `pnpm install` | Instalacja zależności                               |
| `pnpm dev`     | Start serwera dev na `localhost:4321`               |
| `pnpm build`   | Budowanie produkcyjnej wersji do katalogu `./dist/` |
| `pnpm preview` | Podgląd zbudowanej wersji lokalnie                  |
| `pnpm lint`    | Uruchomienie ESLint                                 |
| `pnpm format`  | Formatowanie kodu z użyciem Prettier                |

## 🛠️ Jak korzystać z template'u

1. Sklonuj repozytorium
2. Zainstaluj zależności: `pnpm install`
3. Uruchom serwer deweloperski: `pnpm dev`
4. Dostosuj zawartość w katalogu `src/`

## 📝 Uwagi

Konfiguracja Tailwind + ESLint + Prettier była czasochłonna, ale wszystko działa jak należy.
Możesz teraz skupić się na tworzeniu projektu, a nie na konfiguracji narzędzi!
