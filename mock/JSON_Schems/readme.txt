1. Регистрация:
1.1. FE отправляет запрос:
тип: POST
файл: registration.json
задача BE:
сохраить объект USER пример объекта (hillel-evo-event-messenger/mock/JSON_Schems/user_pattern.json),
Выполняем метод POST на endpoint /user, данный user должен быть неактивным пока он не сделает подтверждение через свою почту
200-OK({})
409-Conflict if user exists ({"message":"User is already exist in Data Base"})
если в течении суток не пришло подтверждение - удалить запись (low-level priority task)
если подтверждение пришло, выставляем флаг в БД true

на очту приходит ссылка с временным токеном для подтверждения пользователя, при нажатии на которую на BE мы выполняем авторизацию пользоватля
и возвращаем объект с токеном,({
                                     “access_token”:“2YotnFZFEjr1zCsicMWpAA”,
                                     “token_type”:“example”,
                                     “expires_in”:3600,
                                     “refresh_token”:“tGzv3JOkF0XG5Qx2TlKWIA”,
                                     “example_parameter”:“example_value”
                                   })


2. Авторизация
2.1. FE отправляет запрос:
тип: POST
пример объекта файл: (hillel-evo-event-messenger/mock/JSON_Schems/auth-get.json)
задача BE:
найти в базе юзера пол логину (либо id, либо e-mail), проверить соответсвие пароля, вернуть объект:
статус код 200:
({
                                     “access_token”:“2YotnFZFEjr1zCsicMWpAA”,
                                     “token_type”:“example”,
                                     “expires_in”:3600,
                                     “refresh_token”:“tGzv3JOkF0XG5Qx2TlKWIA”,
                                     “example_parameter”:“example_value”
                                   })

Статус код 403 (запрещено):
{"message":"User is already exist in Data Base"}


//////2.2. При успешной авторизации FE отправляет полученный токен и BE:
//////1. собирает данные по юзеру

3. Event
3.1. Пользователь создает евент, он может его создавать не за раз, поэтому он сразу сохраняет draft:
тип: POST
пример объекта файл: (hillel-evo-event-messenger/mock/JSON_Schems/event.json)
генерится id евента
На стороне БД мы должны связать юзера и евент по ID
в самом евете будет "status": false, это значит, что этот евент пока не отправлен контактам, он меняется на true (т е когда перестает быть draft) как только юзер его отправляет друзьям.

3.2. при голосовании за даты, места и т п отправляется запрос:
тип: PUT
где только один конкретный элемент переходит из массива date.drafts/place.drafts в confirmed

пользователи, которые подтвердили участие или поставили "возможно" получают в массиве members.invited.chat_success = true (до этого они все false)






