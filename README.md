# hillel-evo-event-messenger

# Запустить сервeр и WebSocket Client

`npm run server`

open 2-n windows http://localhost:3003/ws/

create messages

# flexboxgrid

http://flexboxgrid.com/

# templates creating

1. Под свой таск сделать папку в каталоге `templates` типа `templates/T-20-footer`
2. В этой папке создать html-файл и sass-файл (например footer.html и footer.sass)
3. Пример оформления кода смотрим в `templates/example-layout/`
4. Если нужно добавить картинки, создаем в вашей папке каталог `/img/`
5. Если нужно, создаем в вашей папке каталог для шрифтов `/fonts`
6. При окончании работы создаем pull request

# templates compilation

Компиляция в `templates/compiled/<name>/<template-name>`, выполнять из корня проекта

`gulp sass:tempaltes`

#

Следить за имзенениями:

`gulp watch:templates`

#

# Run mock server
'npm run mock'


# Компиляция для live backend:

`gulp watch:server`

# Компиляция для local server backend:

`gulp watch:localServer`

# Сбор библиотек
'gulp bundle:js'
