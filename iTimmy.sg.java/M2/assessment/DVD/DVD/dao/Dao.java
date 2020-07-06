package dao;

import dto.*;
import java.util.*;

public interface Dao {
    DVD addDVD(String title, DVD dvd);
    DVD removeDVD(String dvd);
    DVD editDVD();
    List<DVD> getAllDVDs();
    DVD displayDVD();
    List<DVD> searchDVD();

    DVD loadDVD();
    DVD saveDVD();
    List<DVD> editAllDVD();
}