package main.java.dto;

import java.util.*;

public class VendingMachine{

    String itemName;
    float itemCost;
    float userMoney;
    int numberOfItems;


    // ###### ITEM NAME ###### //
    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    // ###### ITEM COST ###### //
    public float getItemCost() {
        return itemCost;
    }

    public void setItemCost(float itemCost) {
        this.itemCost = itemCost;
    }

    // ###### USER MONEY ###### //
    public float getUserMoney() {
        return userMoney;
    }

    public void setUserMoney(float userMoney) {
        this.userMoney = userMoney;
    }

    // ###### NUMBER OF ITEMS ###### //
    public int getNumberOfItems() {
        return numberOfItems;
    }

    public void setNumberOfItems(int numberOfItems) {
        this.numberOfItems = numberOfItems;
    }

}