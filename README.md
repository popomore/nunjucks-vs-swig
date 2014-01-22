# Nunjucks v.s. Swig

## render

```
$ node render.js
```

result

```
nunjucks
Raw:
 > 92.20779220779221
 > 93.00399600399601
 > 86.96403596403596
 > 95.12787212787212
Average (mean) 91.82592407592408

swig
Raw:
 > 19.98901098901099
 > 19.823176823176823
 > 18.393606393606394
 > 19.786213786213786
Average (mean) 19.498001998001996

Winner: nunjucks
Compared with next highest (swig), it's:
78.77% faster
4.71 times as fast
0.67 order(s) of magnitude faster
QUITE A BIT FASTER
```

## renderString

```
$ node renderString.js
```

result

```
swig
Raw:
 > 3.1372549019607843
 > 3.286770747740345
 > 3.3812341504649197
 > 3.484320557491289
Average (mean) 3.3223950894143344

nunjucks
Raw:
 > 1.004995004995005
 > 1.1998001998001997
 > 1.2237762237762237
 > 1.2717282717282716
Average (mean) 1.175074925074925

Winner: swig
Compared with next highest (nunjucks), it's:
64.63% faster
2.83 times as fast
0.45 order(s) of magnitude faster
QUITE A BIT FASTER
```
