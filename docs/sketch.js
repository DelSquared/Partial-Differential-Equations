var h=500,w=500;
var n = 1000;
var x=new Array(n);
for (i=0;i<n;i++){
  x[i]=-Math.exp(-(i-w)*(i-w)/100);
}
x[0]=0;
x[n-1]=0;

function setup() {
  background(0);
  createCanvas(w, h);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  beginShape();
  for (i=0;i<n;i++){
    vertex(w*i/n,(x[i]+1)*h/2);
  }
  endShape();
  x=Step(x);
  x=Step(x);
  x=Step(x);
  x=Step(x);
  x=Step(x);
  x=Step(x);

}

function D(x,i){
  return (x[i-1]-2*x[i]+x[i+1]);
}

function Step(x){
  var xnew = new Array(n);
  xnew[0]=x[0];
  xnew[n-1]=x[n-1];
  for (i=1;i<n-1;i++){
    xnew[i] = x[i] + D(x,i)*0.5;
  }
  return xnew;
}


//d(Tg-T)/dt = -(Tg-T)
//D = (1 - 1/FR) + sq(3T/m)/FR*c
