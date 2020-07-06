package main.java.dao;

import main.java.dto.*;
import java.util.*;

public interface DAO {
    VendingMachine numOfItems(int numItems);
    VendingMachine goneItems(int numItems);
    VendingMachine getItem(String item);
    List<VendingMachine> getAllItems();
    void updateItems(int numItems);
}
