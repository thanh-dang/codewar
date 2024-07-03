package main

import "math"
func Doubles(k, n int) float64 {
  if k == 1 {
    return SumN(1,float64(n))
  }
  return SumN(float64(k),float64(n)) + Doubles(k-1,n)
}

func SumN(k,n float64) float64 {
  if n == 1 {
    return 1/(k * math.Pow(2.0,2 *k));
  }
  return 1/(k * math.Pow(n + 1,2*k)) + SumN(k, n-1)
}