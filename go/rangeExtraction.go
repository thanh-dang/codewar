package main

import (
	"fmt"
	"strconv"
	"strings"
)

func Solution(list []int) string {
	rs := []string{}
	count := 0
	for i := 0; i < len(list); i++ {
		if i == len(list) - 1{
			if list[i-1] + 1  == list[i]{
				if count >=2 {
					rs = append(rs,"-" + strconv.Itoa(list[i]))
				}else if count == 1 {
					rs = append(rs,"," + strconv.Itoa(list[i])+ ",")
				} else {
					rs = append(rs,strconv.Itoa(list[i]))
				}
			} else {
				rs = append(rs,strconv.Itoa(list[i]))
			}
		}else{
			if list[i] + 1 == list[i+1] {
				if count == 0 {
					rs = append(rs,strconv.Itoa(list[i]))
					count = count + 1;
				}else {
					count = count + 1;
				}
			} else {
				if count >= 2 {
					rs = append(rs,"-" + strconv.Itoa(list[i]) + ",")
				} else if count == 1 {
					rs = append(rs,"," + strconv.Itoa(list[i])+ ",")
				} else {
					rs = append(rs,strconv.Itoa(list[i]) + ",")
				}
				
				count = 0
			}
		} 
			
	}
	fmt.Println(strings.Join(rs,""))
  return strings.Join(rs,"")
}