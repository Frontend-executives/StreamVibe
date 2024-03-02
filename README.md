![logo.svg](public%2Fimages%2Flogo.svg)

# StreamVibe - онлайн кинотеатр

### [Ссылка на дизайн в Figma](https://www.figma.com/community/file/1294589591426976269)

## Стек технологий проекта

- `Next.js (App router & server components)` `TypeScript` `MobX`
- `TailWind` `PostCss`
- `ESLint` `Husky` `Lint-staged` `Prettier`

## Как запускать?

1. Убедитесь что у вас установлен `node`

2. Выполните команду `npm run dev`

3. Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть результат

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

### Форматирование файлов

`npm run format`

### Сборка

`npm run build`
