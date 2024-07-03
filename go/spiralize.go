package main

import (
	"fmt"
	"math"
)

func Spiralize(n int) [][]int {
		rs := make([][]int, n)
		for z := range rs {
			rs[z] = make([]int, n)
			for y := range rs[z] {
				rs[z][y] = 0
			}
		}

		loop := int(math.Round(float64(n) / 2))
		
		char := 1
		for l := 0; l < loop; l++ {
			if l >= 1 {
				rs[l][l - 1] = char
			}
			for rIndex := 0 + l; rIndex < n - l; rIndex++ {
				for cIndex := 0 + l; cIndex < n - l; cIndex++ {
					if rIndex == l ||
							rIndex == n - l - 1 ||
							cIndex == n - l - 1 ||
							cIndex == l{
						// ke ngang , ke doc
						rs[rIndex][cIndex] = char
					}else{
						rs[rIndex][cIndex] = 0
					}
				}
			}
			char = 1
			if l % 2 == 0 {
				char = 0
			}
		}
		
		fmt.Println(rs)
		return rs
}

