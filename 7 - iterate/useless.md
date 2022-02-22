```
    fill(0,0,0)
    circle(100, 240, 100);
    fill(0,0,0)
    circle(200, 240, 100);
    fill(0,0,0)
    circle(300, 240, 100);
    fill(0,0,0)
    circle(400, 240, 100);
    fill(0,0,0)
    circle(500, 240, 100);
    fill(0,0,0)
    circle(600, 240, 100);
    fill(0,0,0)
```

```
    background(100);
    var space = 50
    var radii = 30
    for (let i = 0; i < 640; i=i+space) {
    circle(i, 240, radii);
    fill(0,0,0)
    }
```

Extra-hard, making a grid of circles
```
    background(100);
    var space = 50
    var radii = 30
    for (let i = 0; i < 640; i=i+space) {
        for (let j = 0; j < 480; j=j+space)
        {
        circle(i, j, radii);
        fill(0,0,0)
        }
    }
```

