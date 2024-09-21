[Документация архитектуры FSD](https://feature-sliced.design/docs/get-started/overview)

### НЕ ЗАБЫВАЕМ!
перед запуском проекта. 
```
npm install 
```




## Структура проекта

> /src
>> /app
>>> /routing
>>>> **App.js**

>> /pages
>>> /namePage
>>>> /ui _сама страница_
>>>>> **NamePage.jsx**
>>>>> 
>>>> **index.js**
>>>> 
>>> **index.js** 

>> /widgets
>>> /nameWidgets
>>>> /ui _сам widget_
>>>>> **WidgetName.jsx**
>>>>> 
>>>> **index.js**
>>>> 
>>> **index.js** 

>> /features
>>> /featureName
>>>> **index.js**
>>>> 
>>> **index.js**

>> /shared
>>> /styles
>>> 
>>>> **style.cscc**
>>>> 
>>> /components
>>>> 
>>>> **Button.jsx**
>>>> 
>>>> **Input.js**
>>>> 
>>> **index.js**

## Детали
-----------------------------

Папки верхнего уровня, могут использовать компоненты нижних уровней, папки нижних уровней **НЕ МОГУТ** использовать компоненты выше стоящих папок.

Странчки в _/pages_ формируются обычно за счет виджетов (widgets), виджеты обычно формируются на основе shared.

shared — там прописываем самые часто используемые компоненты. В виджетах все компоненты из shared объеденяем и уже на основе виджетов строим страничку.

### Примечание: 
Брать элементы из _/shared_ и юзать в _/pages_ — **МОЖНО**.

Все страницы мы импортируем в _/app/router/**App.js**_ .

```
    import { Leading, НазваниеСтраницы } from "../../pages";

   

    <Routes>
        <Route exact path="/" element={<Leading />} />
        <Router path="{названиеUrl}" element={<НазваниеСтраницы />} > 
    </Routes> 
```
