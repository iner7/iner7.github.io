# 1. Основы выборочной теории.
## 1.1. Понятие машинного обучения. Предмет, основные задачи, основные понятия математической статистики.

**Машинное обучение** - раздел искусственного интеллекта, основным предметом которого является изучение и разработка методов построения алгоритмов, способных обучаться при решении похожих задач.

Всю совокупность задач машинного обучения делят на две группы:
1. Обучение с учителем.
2. Обучение без учителя.

Множество методов машинного обучения основывается на аппарате математической статистики.
**Математическая статистика** *(лат. "статус" - состояние)* - наука, изучающая явления, которые имеют случайный характер, но являются массовыми. При этом явления изучаются на основе конечного числа наблюдений.

Методами математической статистики выступают методы теории вероятностей, математического анализа, дифференциальных уравнений и специальные методы, используемые при изучении массовых совокупностей. 

Всю совокупность методов в математической статистике можно разделить на две группы: параметрические методы и непараметрические. Параметрические методы основываются на вероятностной модели. В непараметрических методах нет информации о параметрической модели или она не используется.

К основным задачам математической статистики относятся:

1. Сбор, группировка и описание данных, полученных в результате наблюдений или экспериментов. 
2. Определение неизвестной функции распределения или функции плотности вероятностей (случайная величина).
3. Оценка неизвестных параметров распределения (оценка параметров a и sigma для нормального закона распределения)
4. Проверка статистических гипотез (проверка гипотезы о том, что случайная величина имеет нормальный закон распределения с параметрами $a$ и $\sigma$) $X \sim N(a;\sigma) $ $X \sim N(a;\sigma^2) $
5. Изучение зависимостей между случайными величинами.

Рассмотрим основные понятия математической статистики. 

Основным понятием в математической статистике является **статистическая совокупность** - совокупность однородных объектов, объединённых отличительным признаком. Различают генеральную и выборочную совокупность. 

**Генеральная совокупность** - вся мыслимая совокупность объектов, подлежащих изучению. 

**Выборочная совокупность** - совокупность объекта, извлечённых из генеральной совокупности для дальнейшего изучения. Выборочная совокупность также называется выборкой.

Различают два метода изучения объектов статистической совокупности: **метод сплошных наблюдений** и **выборочный метод**. В методе сплошных наблюдений изучению подвергается каждый объект генеральной совокупности. Для ряда задач реализовать метод сплошных наблюдений на практике бывает сложно, иногда даже невозможно. Поэтому чаще всего используется выборочный метод, согласно которому изучению подлежат объекты выборочной совокупности, а полученные выводы распространяются на всю генеральную совокупность.

Различают четыре вида выборок.

1. ***Собственно-случайная выборка - выборка***, при которой объект случайным образом извлекается из генеральной совокупности. Например, выборка 20 студентов FizMat.OSU.
2. ***Механическая выборка*** - выборка, в которой объекты извлекаются из генеральной совокупности через определённый интервал. Например, выбор каждого пятого студента по списку группы.
3. ***Типическая или стратифицированная*** - выборка, в которую извлекаются объекты из типических групп, на которые предварительно разбита генеральная совокупность. Пример: выбор 10% студентов из каждой академической группы факультета.
4. ***Серийная, или гнездовая выборка*** - выборка, в которую извлекаются не отдельные объекты, а целые группы или серии объектов, объекты которых подвергаются сплошному наблюдению. Пример: выборка студентов академической группы. 

Различают **повторную** и **бесповторную** выборки. Выборка называется бесповторной, если после изучения объект не возвращается в генеральную совокупность и не подлежит повторному изучению. В противном случае выборка называется повторной.

Объёмом генеральной совокупности называется количество объектов генеральной совокупности. **Объём выборочной совокупности** - количество объектов выборочной совокупности. Основной задачей математической статистики является, как отмечалось, изучение объектов выборочной совкупности и распространение полученных выводов на генеральную совокупность. Для того, чтобы по выборке можно было судить с достоверностью о генеральной совокупности, выборка должна быть репрезентативной и представительной. Как правило, данным свойством обладает случайная бесповторная выборка с достаточным объёмом. 


## 1.2. Дискретный, интервальный ряды.

При изучении некоторого количественного признака генеральной или выборочной совокупности проводятся испытания ли наблюдения. Пусть в результате некоторых независимых испытаний, проводимых в одинаковых условиях, получены числовые значения $x_i$ некоторой случайной величины или количественного признака $X$.

Если значения исследуемого признака могут отличаться друг от друга на фиксированную величину, то для исследования применяется дискретный вариационный ряд. Если значения отличаются на пренебрежительно малые величины, то используется интервальный ряд.

Пусть в результате независимых испытаний получены следующие числовые значения количественного признака $X$: $x^{(1)}, x^{(2)}, \dotsc, x^{(n)}$. Расположим полученные значения в порядке возрастания. Получим ранжированный ряд наблюдений $x_1, x_2, \dotsc, x_n$. 

Дискретным вариационным рядом называется последовательность значений $x^{(1)}, x^{(2)}, \dotsc, x^{(n)}$, количественного признака $X$, расположенных в порядке возрастания.

Значения $x_i$ называются **вариантами**. 

Частотой $n_i$ называется величина, показывающая, сколько раз встречается варианта $x_i$. Если среди вариант есть повторяющиеся значения, то дискретный вариационный ряд удобнее представлять в виде таблицы или дискретного распределения признака. Относительной частотой $\omega_i$ называется отношение частоты $n_i$ к объёму выборки n. 

$$\omega_i = {n_i \over n} \quad\quad\quad(1)$$ 

Дискретное распределение признака для частот и относительных частот примет вид:

| варианта $x_i$                    | $x_1$      | $x_2$      | ... | $x_k$      | $\Sigma$ |
| ----------------------------------|------------|------------|-----|------------|----------|
| частота $n_i$                     | $n_1$      | $n_2$      | ... | $n_k$      | $n$      |
| относительная частота $\omega_i$  | $\omega_1$ | $\omega_2$ | ... | $\omega_k$ | $1$      |

**Пример 1.** _В филиале коммерческого банка проводились наблюдения над числом выданных кредитов по определённой программе кредитования в течение 25 дней. Получили следующие 25 наблюдений:_
$$3, 5, 1, 3, 2, 4, 4, 2, 2, 4, 0, 3, 3, 2, 2, 0, 2, 1, 4 , 3, 3, 1, 5, 4, 3$$

Пусть X - число выданных кредитов в день. Дискретный вариационный ряд имеет вид:

| $x_i$       | $0$    | $1$    | $2$    | $3$    | $4$   | $5$    | $\Sigma$ |
| ------------|--------|--------|--------|--------|-------|--------|----------|
| $n_i$       | $2$    | $3$    | $6$    | $7$    | $5$   | $2$    | $25$     |
| $\omega_i$  | $0,08$ | $0,12$ | $0,24$ | $0,28$ | $0,2$ | $0,08$ | $1$      |


Дискретный _(т. е. упорядоченный)_ вариационный ряд:
$$0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5.$$

Наряду с понятием частоты и относительной частоты вводятся понятия накопленной частоты и накопленной частности. **Накопленная часота** $n_i^{нак}$ - число, покзаывающее, сколько встретилось значений признака (количество вариант), не превосходящих $x_i$. **Накопленная частность** $\omega_i^{нак}$ - отношение накопленной частоты $n_i^{нак}$ к объёму выборки $n$.

$$\omega_i^{нак} = { n_i^{нак} \over n } \quad\quad\quad(2)$$

**Пример 2.** _В условиях примера 1 найти накопленные частоты и частности._

| $x_i$            | $0$    | $1$   | $2$    | $3$    | $4$    | $5$  | $\Sigma$ |
| -----------------|--------|-------|--------|--------|--------|------|----------|
| $n_i$            | $2$    | $3$   | $6$    | $7$    | $5$    | $2$  | $25$     |
| $n_i^{нак}$      | $2$    | $5$   | $11$   | $18$   | $23$   | $25$ |          |
| $\omega_i^{нак}$ | $0,08$ | $0,2$ | $0,44$ | $0,72$ | $0,92$ | $1$  |          |


 Пусть дан дискретный ряд распределения. Эмпирическая функция распределения конечного признака $X$ - функция вида $$F_n (x) = {n_x \over n} \quad\quad\quad(3)$$

где $n_x$ - число вариант, для которых $x_i < x$

$n$ - объём выборки

**Пример 3.** _В условиях примера 1 составить и построить эмпирическую функци распределения._

1. $x \leq 0 \newline
    F_{25} (-1) = {0 \over 25} = 0 \newline
    F_{25} (0) = {0 \over 25} = 0 \newline
    x \leq 0, \quad\quad F_{25} (x) = 0$
2. $0 < x \leq 1 \newline
    F_{25} (1) = {2 \over 25} = \omega_1 = \omega_1^{нак} = 0,08 \newline
     0 < x \leq 1 \quad\quad F_{25}(x) = 0,08$
3. $1 < x \leq 2 \newline
    F_{25} (2) = {5 \over 25} = \omega_1 + \omega_2 = \omega_2^{нак} = 0,2 \newline
    1 < x \leq 2, \quad\quad F_{25}(x) = 0,1$
4. $2 < x \leq 3 \newline
    F_{25} (3) = {11 \over 25} = 0,44 \newline
    2 < x \leq 3, \quad\quad F_{25}(x) = 0,44$
5. $3 < x \leq 4 \newline
    F_{25} (4) = {18 \over 25} = 0,72 \newline
    3 < x \leq 4, \quad\quad F_{25}(x) = 0,72$
6. $4 < x \leq 5 \newline
    F_{25} (5) = {23 \over 25} = 0,92 \newline
    4 < x \leq 5, \quad\quad F_{25}(x) = 0,92$
7. $x > 5 \newline
    F_{25} (6) = {25 \over 25} = 1 \newline
    x > 5, \quad\quad F_{25}(x) = 1 $
Таким образом, функция имеет вид

$$
F_{25}(x)=
\begin{cases}
    0,      &\quad  x \leq 0 \\
    0,08,   &\quad  0 < x \leq 1 \\
    0,2,    &\quad  1 < x \leq 2 \\
    0,44,   &\quad  2 < x \leq 3 \\
    0,72,   &\quad  3 < x \leq 4 \\
    0,92,   &\quad  4 < x \leq 5 \\
    1,      &\quad  x > 5
\end{cases}
$$

![](res\FX7.svg "")

Свойства функции:
1. $F_n (x) = 0 , x <= x_1$ ($x_1$ - наименьшее)
    $F_n (x) = 1 , x <= x_m$ ($x_m$ - наибольшая)
2. $F_n (x)$ принадл $[0 ; 1]$
3. $F_n (x)$ неубывающая. 

В общем виде эмпирическая функция

$$
F_{25}(x)=
\begin{cases}
    0,                                                      &\quad  x \leq x_1       \\
    \omega_1^{нак} = \omega_1,                              &\quad  x_1 < x \leq x_2 \\
    \omega_2^{нак} = \omega_1 + \omega_2 ,                  &\quad  x_2 < x \leq x_3 \\
    \omega_3^{нак} = \omega_1 + \omega_2 + \omega_3 ,       &\quad  x_3 < x \leq x_4 \\
    ... \\
    \omega_k^{нак} = \omega_1 + \omega_2 + ... + \omega_k,  &\quad  x_k < x \leq x_{k+1} \\
    ... \\
    1,                                                      &\quad  x > x_m
\end{cases}
$$

![](res\FX10.svg "")

**Теорема Гливенко.** Пусть $X$ - случайная величина с функцией распределения $F(x)$. По выборке объёма $n$ значений случайной величины $X$ построена эмпирическая функция распределения $F_n (x)$. Тогда 
$P(|F_n(x) - F(x)| > \varepsilon ) \to 0 \quad \forall \varepsilon > 0 \quad n \to 0$.

**Полигон частот (относительных частот)** - ломаная линия, последовательно соединяющая точки $(x_i, n_i)$ ($(x_i, w_i)$).

**Пример 4.** _В условиях примера (1) построить полигон частот и относительных частот._

| $x_i$       | $0$    | $1$    | $2$    | $3$    | $4$   | $5$    | $\Sigma$ |
| ------------|--------|--------|--------|--------|-------|--------|----------|
| $n_i$       | $2$    | $3$    | $6$    | $7$    | $5$   | $2$    | $25$     |
| $\omega_i$  | $0,08$ | $0,12$ | $0,24$ | $0,28$ | $0,2$ | $0,08$ | $1$      |

![](res\FX12.svg "")


Кумулятивной кривой (кумулянтой) называется  ломаная, состоящая из точек $(x_i; n_i^{нак})$. Интервальный ряд представляется в виде интервального распределения признака. 

| $x_i-x_{i+1}\newline[ x_i ; x_{i+1} )$ | $x_1-x_2\newline[ x_1 ; x_2 )$ | $x_2-x_3\newline[ x_2 ; x_3 )$ | $...$ | $x_m-x_{m+1}\newline[ x_m ; x_{m+1} ]$ |
| ---------------------------------------|--------------------------------|--------------------------------|-------|----------------------------------------|
| $n_i$                                  | $n_1$                          | $n_2$                          | $...$ | $n_m$                                  |


При этом предполагается, что каждый интервал имеет одинаковую длину $h=x_2-x_1=x_3-x_2=...=x_{m+1}-x_m$.

Гистограммой интервального ряда называется ступенчатая фигура, состоящая их прямоугольников с основаниями $h$ и высотами $\omega_i \over h.$

![](res\FX14.svg "")

$\displaystyle S_1 = {\omega_1 \over h} * h = \omega_1$

$\displaystyle S_2 = {\omega_2 \over h} * h = \omega_2$

$\displaystyle S_3 = {\omega_3 \over h} * h = \omega_3$

$\displaystyle ...$

$\displaystyle S_m = \omega_m$

$\displaystyle S = S_1 + S_2 + ... + S_m = \omega_1 + \omega_2 + ... + \omega_m = 1$




## 1.3. Методы перехода от интервального ряда к дискретному и от дискретного к интервальному.

Для того, чтобы от интервального ряда перейти к дискретному, необходимо в качестве вариант дискретного ряда принять середины соответствующих интервалов.

Для перехода от дискретного ряда к интервальному необходимо знать длину каждого интервала $h$ и количество интервалов $m$. Если в рамках конкретного исследования не указано количество интервалов или выысота, то на практике чаще всего используют формулу Стердтесса(!!!!). Согласно формуле длина $h$ и количество интервалов $m$ определется в виде:

$$ h = {{x_{max} - x_{min}} \over {1 + [3,322 \cdot \lg n]}} \quad\quad\quad(4)$$
_Квадратные скобки - целая часть числа_

где $x_{min}$ - наименьшее значение признака

где $x_{max}$ - наибольшее значение признака

где $d = x_{max} - x_{min}$ - размах вариант

где $n$ - объём выборки

$$ m = 2 + [3,322 \cdot \lg n] \quad\quad\quad(5)$$

Тогда границы для интервального ряда заданы в виде:

![](res\FX16.svg "")

$\displaystyle x_1 = x_{min} - {h \over 2}$

$\displaystyle x_2 = x_1 + h$

$\displaystyle x_3 = x_2 + h$

$\displaystyle ...$

$\displaystyle x_k = x_{k-1} + h$

$\displaystyle x_{m+1} = x_m + h = x_{max} + {h \over 2}$

Пример. Представить выборочные наблюдения в виде интервального ряда:

$ очень много цифр $

$\displaystyle x_{min} = 10,1$

$\displaystyle x_{max} = 23,8$

$\displaystyle n = 55$

$\displaystyle h = {{23,8 - 10,1}\over{1+[3,322 \cdot \lg 55]}} = 2,28$

$\displaystyle {{h} \over {2}} = 1,14$

$\displaystyle m = 2 + 5 = 7$

$\displaystyle x_1 = 10,1 - 1,14 = 8,96$

$\displaystyle x_2 = 10,1 + 1,14 = 11,24$

$\displaystyle x_3 = 13,52$

$\displaystyle ...$

| $x_i-x_{i+1}\newline[ x_i ; x_{i+1} )$ | $[ 8,96 ; 11,24 )$ | $[ 11,24 ; 13,52 )$ | $[ 13,52 ; 15,8 )$ | $[ 15,8 ; 18,08 )$ | $[ 18,08 ; 20,36 )$ | $[ 20,36 ; 22,64 )$ | $[ 22,64 ; 24,92 ]$ |
| ---------------------------------------|--------------------|---------------------|--------------------|--------------------|---------------------|---------------------|---------------------|
| $n_i$                                  | $1$                | $4$                 | $9$                | $12$               | $18$                | $8$                 | $3$                 | 


## 1.4. Выборочные характеристики 

***только для дискретного ряда!!!***

Пусть дан дискретный вариационный ряд
| $x_i$ | $x_1$      | $x_2$      | ... | $x_k$      | $\Sigma$ |
|-------|------------|------------|-----|------------|----------|
| $n_i$ | $n_1$      | $n_2$      | ... | $n_k$      | $n$      |



**Выборочной средней** $\bar x_в$ называется среднее арифметическое распределения признака выборочной совокупности. = 

$$\bar x_в = { {x_1 n_1 + x_2 n_2 + ... + x_m n_m} \over {n} } = { {\sum_{i=1}^m {x_i n_i}} \over {n} }  \quad\quad\quad(6)$$

**Выборочной дисперсией** $D_в$ называется дисперсия распределения признака выборочной совокупности.

$$ 
D_в = { {  (x_1-\bar x_в)^2*n_1  +  (x_2-\bar x_в)^2*n_2  +  ...  +  (x_m-\bar x_в)^2*n_m   } \over {n} } = \newline

= { {  \sum_{i=1}^m { (x_i-\bar x_в)^2*n_i }  } \over {n} }

\quad\quad\quad(7)$$

**Выборочное среднее квадратическое отклонение** - арифметический квадратный корень из дисперсии

$$ \sigma_в = \sqrt{D_в} \quad\quad\quad(8)$$

**Мода** $M_0$ - значения варианты, соответствующей наибольшей частоте. 

**Медиана** $M_e$ - значение признака, приходящееся на середину ранжированного ряда наблюдений.

$$
M_e = 
\begin{cases}
    x_{ { {n+1} \over 2 } } &\quad n \text{ - нечётное} \\
    {1\over2} (    x_{ { n \over 2 } }  +   x_{ { n \over 2 }+ 1 }   )    &\quad n \text{ - чётное}
\end{cases}

\quad\quad\quad(9)
$$

## 1.3. Групповая и общая средняя. Групповая и общая дисперсия

**Теорема.** Сумма отклонений значений признака от выборочной средней равна нулю.

$$ \sum_{i=1}^n {(x_i - \bar x_в) n_i = 0} \quad\quad\quad(10) $$

где $(x_i - \bar x_в) n_i$ - отклонение наблюдения $x_i$ от выборочной средней $\bar x_в$.

$$\bar x_в = { { \sum_{i=1}^m {x_i n_i} } \over n } $$

$$\sum_{i=1}^m {x_i n_i}={\bar x_в \cdot h}$$

$$ \sum_{i=1}^m {(x_i - \bar x_в) \cdot n_i} = \newline
= \sum_{i=1}^m x_i \cdot n_i - \sum_{i=1}^m \bar x_в \cdot n_i = \newline
= \bar x_в \cdot n - \bar x_в \cdot \sum_{i=1}^m n_i = \newline
= \bar x_в \cdot n - \bar x_в \cdot n = 0$$


Пусть дан дискретный вариационный ряд
| $x_i$ | $x_1$      | $x_2$      | ... | $x_k$      | $\Sigma$ |
|-------|------------|------------|-----|------------|----------|
| $n_i$ | $n_1$      | $n_2$      | ... | $n_k$      | $n$      |

**Теорема.** Для выборочной дисперсии справедлива формула расчётов. 

$$ D_в = \bar x_в^2 - (\bar x_в)^2 $$

$$ \bar x_в^2 = { {\sum_{i=1}^m x_i^2 n_i} \over n } $$

Доказательство. По определению
$$D_в = { {\sum_{i=1}^m (x_i - \bar x_в)^2*n_i} \over n } = \newline
 = \sum_{i=1}^m {(x_i^2 - 2 x_i \bar x_в + (\bar x_в)^2) n_i \over n } = \newline
 = \sum_{i=1}^m {x_i^2 n_i \over n} - {2 \bar x_в \sum_{i=1}^m x_i n_i \over n} + {(\bar x_в)^2 \sum_{i=1}^m {n_i} \over n} = \newline
 = \bar x_в^2 - 2\bar  x_в \cdot \bar x_в + {\bar x_в^2 \cdot n \over n} = \newline
 = \bar x_в^2 - 2 \bar x_в^2 + \bar x_в^2 = \newline
 = \bar  x_в^2 - (\bar x_в)^2$$


Пусть выборочная совокупность разбита на группы выборочных наблюдений: группа $G_1$ с наблюдениями $(x_i^{(1)} ; n_i^{(1)}), G_2$ с наблюдениями $(x_i^{(2)} ; n_i^{(2)})$, ..., $G_k$ с наблюдениями $(x_i^{(k)} ; n_i^{(k)})$.

***

|$G_1$ | $x_i^{(1)}$ | $x_1^{(1)}$ | $x_2^{(1)}$ | ... | $x_{m_1}^{(1)}$ | $\Sigma$  |
|------|-------------|-------------|-------------|-----|-----------------|-----------|
|      | $n_i^{(1)}$ | $n_1^{(1)}$ | $n_2^{(1)}$ | ... | $n_{m_1}^{(1)}$ | $n^{(1)}$ |

Выборочные среднее и дисперсия для группы $G_1$ равны:

$$ x_в^{(1)} = {\sum_{i=1}^{m_1} x_i^{(1)} n_i^{(1)}  \over n^{(1)} } $$
$$ D_b^{(1)} = {\sum_{i=1}^{m_1} ( x_i^{(1)} - \bar x_в^{(1)} )^2  n_i^{(1)} \over n^{(1)} } $$

***

|$G_2$ | $x_i^{(2)}$ | $x_1^{(2)}$ | $x_2^{(2)}$ | ... | $x_{m_2}^{(2)}$ | $\Sigma$  |
|------|-------------|-------------|-------------|-----|-----------------|-----------|
|      | $n_i^{(2)}$ | $n_1^{(2)}$ | $n_2^{(2)}$ | ... | $n_{m_2}^{(2)}$ | $n^{(2)}$ |

Выборочные среднее и дисперсия для группы $G_2$ равны:

$$ x_в^{(2)} = {\sum_{i=1}^{m_2} x_i^{(2)} n_i^{(2)}  \over n^{(2)} } $$
$$ D_b^{(2)} = {\sum_{i=1}^{m_2} ( x_i^{(2)} - \bar x_в^{(2)} )^2  n_i^{(2)} \over n^{(2)} } $$

***

. . .

***

|$G_k$ | $x_i^{(k)}$ | $x_1^{(k)}$ | $x_2^{(k)}$ | ... | $x_{m_k}^{(k)}$ | $\Sigma$  |
|------|-------------|-------------|-------------|-----|-----------------|-----------|
|      | $n_i^{(k)}$ | $n_1^{(k)}$ | $n_2^{(k)}$ | ... | $n_{m_k}^{(k)}$ | $n^{(k)}$ |

Выборочные среднее и дисперсия для группы $G_k$ равны:

$$ x_в^{(k)} = {\sum_{i=1}^{m_k} x_i^{(k)} n_i^{(k)}  \over n^{(k)} } $$
$$ D_b^{(k)} = {\sum_{i=1}^{m_k} ( x_i^{(k)} - \bar x_в^{(k)} )^2  n_i^{(k)} \over n^{(k)} } $$

***

**Групповыми выборочными средними** называются выборочные средние $\bar x_в^{(1)}, \bar x_в^{(2)}, ..., \bar x_в^{(k)}$.

**Групповыми выборочными дисперсиями** называются выборочные дисперсии $D_в^{(1)}, D_в^{(2)}, ..., D_в^{(k)}$.

**Общей выборочной средней** называется выборочная средняя объединённой совокупности $G = G_1 \cup G_2 \cup ... \cup G_k$.

**Теорема.** Пусть выборочная совокупность $G$ разбита на группы $G_1$ с наблюдениями $(x_i^{(1)}, n_i^{(1)})$, $G_2$ с наблюдениями $(x_i^{(2)}, n_i^{(2)})$, $...$, $G_k$ с наблюдениями $(x_i^{(k)}, n_i^{(k)})$. Тогда **общяя средняя** $\bar x_в^{общ}$ для объединённой совокупности $G$ определяется по формуле:

$$  \bar x_в^{общ} = {{\bar x_в^{(1)}} n^{(1)} + {\bar x_в^{(2)}} n^{(2)}  + ... + {\bar x_в^{(k)}} n^{(k)} \over n^{(1)} + n^{(2)} + ... + n^{(k)} } 

\quad\quad\quad(12)$$




**Внутригрупповой дисперсией** называется среднее арифметическое групповых выборочных дисперсий.

$$ D_в^{внутригр} = {{D_в^{(1)}} n^{(1)} + {D_в^{(2)}} n^{(2)}  + ... + {D_в^{(k)}} n^{(k)} \over n^{(1)} + n^{(2)} + ... + n^{(k)} }  \quad\quad\quad
(13)$$

**Межгрупповой выборочной** дисперсией называется дисперсия, характеризующая меру разброса групповых выборочных средних $\bar x_в^{(1)}, \bar x_в^{(2)}$, ..., $\bar x_в^{(k)}$ вокруг общей средней $x_в^{общ}$. 

$$

D_в^{межгр} = 

{

{  (\bar x_в^{(1)} - \bar x_в^{общ})^2 n^{(1)} + 
(\bar x_в^{(2)} - \bar x_в^{общ})^2 n^{(2)} + 
... + 
(\bar x_в^{(k)} - \bar x_в^{общ})^2 n^{(k)} }

\over

{ n^{(1)} + n^{(2)} + ... + n^{(k)}  }

}\quad\quad\quad(14)
$$


**Теорема.** Пусть выборочная совокупность $G$ разбита на группы $G_1$ с наблюдениями $(x_i^{(1)}, n_i^{(1)})$, $G_2$ с наблюдениями $(x_i^{(2)}, n_i^{(2)})$, $...$, $G_k$ с наблюдениями $(x_i^{(k)}, n_i^{(k)})$. Тогда **общяя выборочная дисперсия** $D_в^{общ}$ для объединённой совокупности $G$ определяется по формуле:

$$
D_в^{общ} = D_в^{внутригр} + D_в^{межгр}
\quad\quad\quad(15)
$$

**Общая дисперсия** - выборочная дисперсия для объединённой совокупности $G = G_1 \cup G_2 \cup ... \cup G_k$.