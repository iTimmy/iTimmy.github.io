package main.java.controller;

import java.util.*;

// the user calls this class, and all the info that
// the controller class takes passes it on to the service layer

public class Controller {
    Map<String, Integer> items = new HashMap<>();

    public void run() {
        boolean active = true;
        int select = 0;

        while(select == 0) {
            
        }
    }

    public void init() {
        items.put("pizza", 3);
        items.put("coke", 1);
        items.put("hotdog", 2);
    }

    public void control() {

        System.out.println("");
    }
}