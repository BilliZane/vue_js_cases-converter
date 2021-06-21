<template>
  <div class="header">
    <div class="container">
      <h1 class="header__title">Конвертер регистров</h1>
    </div>
  </div>

  <main class="main">
    <div class="container">
      <div class="forms-content">
        <div class="forms-content__title">
          <span>Конвертер регистров</span> - простой инструмент, который поможет
          Вам избавиться от рутинной работы и сэкономить вемя.
        </div>
        <div class="forms-content__forms-wrap">
          <textarea
            class="forms-content__form"
            placeholder="Введите текст"
            v-model="inputData"
          ></textarea>
        </div>
      </div>
      <div class="statistics">
        Количество символов с пробелами: <span>{{ inputData.length }}</span>
      </div>
      <div class="buttons">
        <button-upper-case @to-upper-case="upperCase"></button-upper-case>
        <button-lower-case @to-lower-case="lowerCase"></button-lower-case>
        <button-every-word-to-upper-case
          @every-to-upper="everyToUpperCase"
        ></button-every-word-to-upper-case>
        <button-camel-case @to-camel-case="camelCase"></button-camel-case>
        <button-snake-case @to-snake-case="snakeCase"></button-snake-case>
        <button-kebab-case @to-kebab-case="kebabCase"></button-kebab-case>
        <button-pascal-case @to-pascal-case="pascalCase"></button-pascal-case>
        <button-upper-case-snake
          @to-upper-case-snake="upperAndSnake"
        ></button-upper-case-snake>
        <button-convert-to-latin
          @to-latin="convertToLatin"
        ></button-convert-to-latin>
        <button-cleare @clear-input="clearInput"></button-cleare>
      </div>

      <div class="description">
        <ul class="description__text">
          <li class="description__item">
            <span :class="this.id === 1 ? 'active-item' : ''"
              >Верхний регистр</span
            >
            - все буквы станут большими.
          </li>
          <li class="description__item">
            <span :class="this.id === 2 ? 'active-item' : ''"
              >Нижний регистр</span
            >
            - все буквы станут маленькими.
          </li>
          <li class="description__item">
            <span :class="this.id === 3 ? 'active-item' : ''"
              >Каждое слово с заглавной буквы</span
            >
            - каждое слово будет написано с большой буквы.
          </li>
          <li class="description__item">
            <span :class="this.id === 4 ? 'active-item' : ''">camelCase</span>
            - должен начинаться со строчной буквы, а первая буква каждого
            последующего слова должна быть заглавной. Все слова при этом пишутся
            слитно между собой.
          </li>
          <li class="description__item">
            <span :class="this.id === 5 ? 'active-item' : ''">snake_case</span>
            - чтобы писать в стиле snake_case, нужно просто заменить пробелы
            знаками подчеркивания. Все слова при этом пишутся строчными буквами.
          </li>
          <li class="description__item">
            <span :class="this.id === 6 ? 'active-item' : ''">kebab-case</span>
            - kebab-case похож на snake_case, только в нем пробелы заменяются на
            дефисы. Слова также пишутся строчными буквами.
          </li>
          <li class="description__item">
            <span :class="this.id === 7 ? 'active-item' : ''">PascalCase</span>
            - В PascalCase каждое слово начинается с заглавной буквы (в отличие
            от camelCase, где первое слово начинается со строчной).
          </li>
          <li class="description__item">
            <span :class="this.id === 8 ? 'active-item' : ''"
              >Upper case & Snake</span
            >
            - все слова пишутся заглавными буквами, а пробелы заменяются знаками
            подчеркивания. Например:
            <span>UPPER_CASE_SNAKE_CASE.</span>
          </li>
          <li class="description__item">
            <span :class="this.id === 9 ? 'active-item' : ''"
              >Конвертировать в латиницу</span
            >
            - выполнит транслитерацию кириллицы в латиницу.
          </li>
          <li class="description__item">
            <span>Очистить поля</span> - очистка поля ввода.
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import ButtonUpperCase from './components/ButtonUpperCase.vue'
import ButtonLowerCase from './components/ButtonLowerCase.vue'
import ButtonEveryWordToUpperCase from './components/ButtonEveryWordToUpperCase.vue'
import ButtonCamelCase from './components/ButtonCamelCase.vue'
import ButtonSnakeCase from './components/ButtonSnakeCase.vue'
import ButtonKebabCase from './components/ButtonKebabCase.vue'
import ButtonPascalCase from './components/ButtonPascalCase.vue'
import ButtonUpperCaseSnake from './components/ButtonUpperCaseSnake.vue'
import ButtonConvertToLatin from './components/ButtonConvertToLatin.vue'
import ButtonCleare from './components/ButtonCleare.vue'

export default {
  data () {
    return {
      inputData: '',
      id: 0
    }
  },
  methods: {
    upperCase () {
      this.inputData = this.inputData.toUpperCase()
      this.id = 1
    },
    lowerCase () {
      this.inputData = this.inputData.toLowerCase()
      this.id = 2
    },
    everyToUpperCase () {
      if (!this.inputData) {
        this.id = 3
        return
      }
      this.inputData = this.inputData
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ')
      this.id = 3
    },
    camelCase () {
      if (!this.inputData) {
        this.id = 4
        return
      }
      const arrFromString = this.inputData.split(' ')
      this.inputData = arrFromString
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ')
        .replace(/ /g, '')
      this.id = 4
    },
    snakeCase () {
      this.inputData = this.inputData.toLowerCase().replace(/ /g, '_')
      this.id = 5
    },
    kebabCase () {
      this.inputData = this.inputData.toLowerCase().replace(/ /g, '-')
      this.id = 6
    },
    pascalCase () {
      if (!this.inputData) {
        this.id = 7
        return
      }
      this.inputData = this.inputData
        .split(' ')
        .map((word) => {
          return word[0].toUpperCase() + word.substr(1)
        })
        .join('')
      this.id = 7
    },
    upperAndSnake () {
      this.inputData = this.inputData.toUpperCase().replace(/ /g, '_')
      this.id = 8
    },
    convertToLatin () {
      if (/[a-z]/i.test(this.inputData)) {
        this.inputData = ''
      }
      this.inputData = this.inputData
        .split('')
        .map((letter) => {
          if (letter === 'А') {
            return 'A'
          }
          if (letter === 'а') {
            return 'a'
          }
          if (letter === 'Б') {
            return 'B'
          }
          if (letter === 'б') {
            return 'b'
          }
          if (letter === 'В') {
            return 'V'
          }
          if (letter === 'в') {
            return 'v'
          }
          if (letter === 'Г') {
            return 'G'
          }
          if (letter === 'г') {
            return 'g'
          }
          if (letter === 'Д') {
            return 'D'
          }
          if (letter === 'д') {
            return 'd'
          }
          if (letter === 'Е') {
            return 'E'
          }
          if (letter === 'е') {
            return 'e'
          }
          if (letter === 'Ё') {
            return 'Yo'
          }
          if (letter === 'ё') {
            return 'yo'
          }
          if (letter === 'Ж') {
            return 'Zh'
          }
          if (letter === 'ж') {
            return 'zh'
          }
          if (letter === 'З') {
            return 'Z'
          }
          if (letter === 'з') {
            return 'z'
          }
          if (letter === 'И') {
            return 'I'
          }
          if (letter === 'и') {
            return 'i'
          }
          if (letter === 'Й') {
            return 'Y'
          }
          if (letter === 'й') {
            return 'y'
          }
          if (letter === 'К') {
            return 'K'
          }
          if (letter === 'к') {
            return 'k'
          }
          if (letter === 'Л') {
            return 'L'
          }
          if (letter === 'л') {
            return 'l'
          }
          if (letter === 'М') {
            return 'M'
          }
          if (letter === 'м') {
            return 'm'
          }
          if (letter === 'Н') {
            return 'N'
          }
          if (letter === 'н') {
            return 'n'
          }
          if (letter === 'О') {
            return 'O'
          }
          if (letter === 'о') {
            return 'o'
          }
          if (letter === 'П') {
            return 'P'
          }
          if (letter === 'п') {
            return 'p'
          }
          if (letter === 'Р') {
            return 'R'
          }
          if (letter === 'р') {
            return 'r'
          }
          if (letter === 'С') {
            return 'S'
          }
          if (letter === 'с') {
            return 's'
          }
          if (letter === 'Т') {
            return 'T'
          }
          if (letter === 'т') {
            return 't'
          }
          if (letter === 'У') {
            return 'U'
          }
          if (letter === 'у') {
            return 'u'
          }
          if (letter === 'Ф') {
            return 'F'
          }
          if (letter === 'ф') {
            return 'f'
          }
          if (letter === 'Х') {
            return 'Kh'
          }
          if (letter === 'х') {
            return 'kh'
          }
          if (letter === 'Ц') {
            return 'Ts'
          }
          if (letter === 'ц') {
            return 'ts'
          }
          if (letter === 'Ч') {
            return 'Ch'
          }
          if (letter === 'ч') {
            return 'ch'
          }
          if (letter === 'Ш') {
            return 'Sh'
          }
          if (letter === 'ш') {
            return 'sh'
          }
          if (letter === 'Щ') {
            return 'Sch'
          }
          if (letter === 'щ') {
            return 'sch'
          }
          if (letter === 'Ъ') {
            return ''
          }
          if (letter === 'ъ') {
            return ''
          }
          if (letter === 'Ы') {
            return 'Y'
          }
          if (letter === 'ы') {
            return 'y'
          }
          if (letter === 'Ь') {
            return ''
          }
          if (letter === 'ь') {
            return ''
          }
          if (letter === 'Э') {
            return 'E'
          }
          if (letter === 'э') {
            return 'e'
          }
          if (letter === 'Ю') {
            return 'Yu'
          }
          if (letter === 'ю') {
            return 'yu'
          }
          if (letter === 'Я') {
            return 'Ya'
          }
          if (letter === 'я') {
            return 'ya'
          }
          if (letter === ' ') {
            return ' '
          }
        })
        .join('')
      this.id = 9
    },
    clearInput () {
      this.inputData = ''
      this.id = 0
    }
  },
  components: {
    ButtonUpperCase,
    ButtonLowerCase,
    ButtonEveryWordToUpperCase,
    ButtonCamelCase,
    ButtonSnakeCase,
    ButtonKebabCase,
    ButtonPascalCase,
    ButtonUpperCaseSnake,
    ButtonConvertToLatin,
    ButtonCleare
  }
}
</script>

<style>
</style>
