## 🚀 기능 요구 사항

암호문을 좋아하는 괴짜 개발자 브라운이 이번에는 중복 문자를 이용한 새로운 암호를 만들었다. 예를 들어 "browoanoommnaon"이라는 암호문은 다음과 같은 순서로 해독할 수 있다.

1. "browoanoommnaon" 
2. "browoannaon" // oomm
3. "browoaaon" // nn
4. "browoon" // aa
5. "brown" // oo

임의의 문자열 cryptogram이 매개변수로 주어질 때, 연속하는 중복 문자들을 삭제한 결과를 return 하도록 solution 메서드를 완성하라.

### 제한사항

- cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
- cryptogram은 알파벳 소문자로만 이루어져 있다.

### 실행 결과 예시

| cryptogram        | result  |
| ----------------- | ------- |
| "browoanoommnaon" | "brown" |
| "zyelleyz"        | ""      |

        0 1 2 3 4 5 6 7 8 9 
        b r o w o a n o o m m n a o n
idx1 -1 0 1 2 3 4 5 6 7
idx2    0 1 2 3 4 5 6 7 8 >> call func

func(answer, 7)
0~6, 9~14 

        0 1 2 3 4 5 6 7 8 9 
        b r o w o a n m m n a o n
idx1 -1 0 1 2 3 4 5 6 7
idx2    0 1 2 3 4 5 6 7 8 >> call func

func(answer, 7)
0~6, 9~12 

        0 1 2 3 4 5 6 7 8 9 
        b r o w o a n n a o n
idx1 -1 0 1 2 3 4 5 6 
idx2    0 1 2 3 4 5 6 7 >> call func

func(answer, 6)
0~5, 8~10

        0 1 2 3 4 5 6 7 8 9 
        b r o w o a a o n
idx1 -1 0 1 2 3 4 5  
idx2    0 1 2 3 4 5 6 >> call func

func(answer, 5)
0~4, 7~8

        0 1 2 3 4 5 6 7 8 9 
        b r o w o o n
idx1 -1 0 1 2 3 4   
idx2    0 1 2 3 4 5 >> call func

func(answer, 4)
0~3, 6

        0 1 2 3 4 5 6 7 8 9 
        b r o w n
idx1 -1 0 1 2 3 4   
idx2    0 1 2 3 4 break;

