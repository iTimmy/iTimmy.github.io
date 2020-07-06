package dao;

import dto.*;
import java.util.*;

public class DaoFileImpl implements Dao {

    private Map<String, DVD> Dvd = new HashMap<>();

    @Override
    public DVD addDVD(String title, DVD dvd) {
        DVD prevDVD = Dvd.put(title, dvd);
        return prevDVD;
        
    }

    @Override
    public DVD removeDVD(String dvd) {
        DVD removedDVD = Dvd.remove(dvd);
        return removedDVD;

    }

    @Override
    public DVD editDVD() {
        return (DVD) Dvd;
    }

    @Override
    public List<DVD> getAllDVDs() {
        return new ArrayList<DVD>(Dvd.values());
    }

    @Override
    public DVD displayDVD() {
        return (DVD) Dvd;
    }

    @Override
    public List<DVD> searchDVD() {
        return (List<DVD>) Dvd;
    }



    @Override
    public DVD loadDVD() {
        return (DVD) Dvd;
    }

    @Override
    public DVD saveDVD() {
        return (DVD) Dvd;
    }

    @Override
    public List<DVD> editAllDVD() {
        return (List<DVD>) Dvd;
    }

}