```yml

1_5
    a: a
    b: in
    c: ao
    d: ai
    e: e

6_10
    f: en
    g: eng
    h: ang
    i: i
    j: an

11_15
    k: 
        - uai
        - ing
    l:  
        - uang
        - iang
    m: ian
    n: iao

16_20
    p: ie
    q: iu
    r: uan
    s: 
        - iong
        - ong
    t:  
        - ue
        - ve

21_25
    u: u
    v: [zh, ui]
    w: ei
    x: [ia, ua]
    y: un

26_z: ou

```

```yml
1
    a: a
    b: in
    c: ao
    d: ai
    e: e
2
    f: en
    g: eng
    h: ang
    i: i
    j: an
3
    k: [uai, ing]
    l: [uang, iang]
    m: ian
    n: iao
    o: iu
4
    p: ie
    q: iu
    r: uan
    s: [iong, ong]
    t: [ue, ve]
5
    u: u
    v: [zh, ui]
    w: ei
    x: [ia, ua]
    y: un
    z: ou
```

在线JSON转Toml-Toml转JSON
https://www.bejson.com/json/json2toml/

```toml
[1]
a = "a"
b = "in"
c = "ao"
d = "ai"
e = "e"
[2]
f = "en"
g = "eng"
h = "ang"
i = "i"
j = "an"
[3]
k = ["uai", "ing"]
l = ["uang", "iang"]
m = "ian"
n = "iao"
o = "iu"
s = "iong"
[4]
p = "ie"
q = "iu"

```

2024年1月26日 - 1
```toml
[[a]]
a = []
b = "in"
c = "ao"
d = "ai"
e = []
[[a]]
f = "en"
g = "eng"
h = "ang"
i = "ch"
j = "an"
[[a]]
k = ["ing", "uai"]
l = ["iang", "uang"]
m = "ian"
n = "iao"
o = "uo"
[[a]]
p = "ie"
q = "iu"
r = "uan"
s = ["iong", "ong"]
t = ["ue", "ve"]
[[a]]
u = ["sh"]
v = ["zh", "ui"]
w = "ei"
x = ["ia", "ua"]
y = "un"
z = "ou"
```

2024年1月26日-2
```toml
a = [
{ a = [], b = "in", c = "ao", d = "ai", e = [] },
{ k = ["ing", "iao"],  l = ["iang", "uang"], m = "ian", n = "iao", o = "uo"},
{ p = "ie", q = "iu", r = 'uan', s = ['iong', 'ong'], t = ["ue", "ve"] },
{ u = 'sh', v = ["zh", "ui"], w = "ei", x = ['ia', 'ua'], y = "un", z = "ou" }
]
```

2024年1月26日-3

```yml
a: []
b: in
c: ao
d: ai
e: []

f: en
g: eng
h: ang
i: ch
j: an

k: ing, uai
l: iang, uang
m: ian
n: iao
o: uo

p: ie
q: iu
r: uan
s: iong, ong
t: ue, ve

u: sh
v: zh, ui
w: ei
x: ia, ua
y: un
z: ou
```

```yml
a: []
b: in
c: ao
d: ai
e: []

f: en
g: eng
h: ang
i: ch
j: an

k: ing uai
l: iang uang
m: ian
n: iao
o: uo

p: ie
q: iu
r: uan
s: iong ong
t: ue ve

u: sh
v: zh ui
w: ei
x: ia ua
y: un
z: ou

```

```yml
a: []
b: in
c: ao
d: ai
e: []
f: en
g: eng
h: ang
i: ch
j: an
k: ing uai
l: iang uang
m: ian
n: iao
o: uo 
p: ie
q: iu
r: uan
s: iong ong
t: ue ve
u: sh
v: zh ui
w: ei
x: ia ua
y: un
z: ou
```

```yml
a: []
b: in
c: ao
d: ai
e: []

f: en
g: eng
h: ang
i: ch
j: an

k: ing uai
l: iang uang
m: ian
n: iao
o: uo

p: ie
q: iu
r: uan
s: iong ong
t: ue ve

u: sh
v: zh ui
w: ei
x: ia ua
y: un
z: ou
```

```golang
x := map[string]string {
    "a": [],
    "b": "in",
    "c": "ao",
    "d": "ai",
}
```

```java
var x = Map.of(
    "a", []
    "b", "in",
    "c", "ao"
)
```

```python
x = {
    'a': [],
    'b': "in",
}
```

```javascript
let x = {
    a: [],
    b: `in`,
    c: `ao`,
    d: `ai`,
    e: [],

    f: `en`,
    g: `eng`,
    h: `ang`,
    i: `ch`,
    j: `an`,

    k: `ing, uai`,
    l: `iang uang`,
    m: `ian`,
    n: `iao`
}
```

```yml
a: []
b: in
c: ao
d: ai
e: []

f: en
g: eng
h: ang
i: ch
j: an

k: ing uai
l: iang uang
m: ian
n: iao
o: uo

p: ie
q: iu
r: uan
s: iong ong
t: ue ve

u: sh
v: zh ui
w: ei
x: ia ua
y: un
z: ou
```

```yml
a: ~
b: in
c: ao
d: ai
e: ~

f: en
g: eng
h: ang
i: ch
j: an

k: ing uai
l: iang uang
m: ian
n: iao
o: uo

p: ie
q: iu

r: uan
s: iong ong
t: ue ve

u: sh
v: zh ui
w: ei

x: ia ua
y: un
z: ou

```

```yml
a: ~
b: in
c: ao

d: ai
e: ~
f: en
g: eng

h: ang
i: ch
j: an
k: ing uai

l: iang uang
m: ian
n: iao

o: uo
p: ie
q: iu

r: uan
s: iong ong
t: ue ve

u: sh
v: zh ui
w: ei

x: ia ua
y: un
z: ou

```


```yml
a: ~
b: in
c: ao
d: ai
e: ~

a: ~
b: in
c: ao
d: ai
e: ~

a: ~
b: in
c: ao
d: ai
e: ~

a: ~
b: in
c: ao
d: ai
e: ~

a: ~
e: ~
b: in
c: ao
d: ai

a: ~
b: in
c: ao
d: ai
e: ~

a: ~
b: in
c: ao
d: ai

b: in
c: ao
d: ai

b in
c ao
d ai

b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
b in c ao d ai
```


```yml
f: en
g: eng
h: ang
j: an
i: ch
i: ch
i ch
i ch
i ch
i ch
i ch
i ch 
i ch
i ch
i ch
i ch
i ch 
i ch
i ch
i ch
i ch
i ch
i ch
i ch
i ch 
i ch
i ch
i ch
i ch
i ch
i ch
i ch
i ch
i ch
i ch
i ch
i ch
i ch
i ch
i ch

f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an 
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
f en g eng h ang j an
```

```yml
p: ie
q: iu
r: uan
s: iong ong
t: ue ve


```
