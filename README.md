![logo.svg](public%2Fimages%2Flogo.svg)

# StreamVibe - онлайн кинотеатр

### [Ссылка на дизайн в Figma](https://www.figma.com/community/file/1294589591426976269)

### [Ссылка на деплой](https://next-stream-vibe.vercel.app)

## Стек технологий проекта

- `Next.js (App router & server components)` `TypeScript` `MobX`
- `TailWind` `PostCss`
- `ESLint` `Husky` `Lint-staged` `Prettier`
- `Vercel (Preview & Deploy)`

## Как запускать?

1. Убедитесь что у вас установлен `Node.js`

2. Установите зависимости проекта: `npm install`

3. Запустите сервер в режиме разработки: `npm run dev`

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть результат

### NGRok - _открываем localhost:3000 параллельно на другом устройстве_

- Регистрируемся на официальном [сайте](https://ngrok.com/)
- Следуем инструкции по подключению ([например для windows](https://dashboard.ngrok.com/get-started/setup/windows))
- После сохранения токена в ngrok.yml, запускаем `ngrok http http://localhost:3000`
- Далее в командной строке будет информация о состоянии подключения NGRok, в поле `Forwarding`
  находится ссылка, которую можно открыть в нужном устройстве (например параллельно на телефоне) или отправить
  кому-либо для быстрой демонстрации
  текущего состояния проекта

### Запуск линтеров

`npm run lint`

### Проверка типов

`npm run typecheck`

### Запуск тестов

- `npm run test`
- `npm run test:watch` - запуск тестов в watch режиме
- `npm run test:memory` - запуск тестов в "дебаг" режиме для отслеживания утечек памяти

### Форматирование файлов

`npm run format`

### Сборка

`npm run build`

### Анализ бандла

`npm run analyze`
