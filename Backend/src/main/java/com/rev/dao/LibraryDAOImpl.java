package com.rev.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.rev.entity.Library;




@Repository("libraryDAO")
public class LibraryDAOImpl implements LibraryDAO{
	@Autowired
	SessionFactory sessionfact;
	
	@Override
	public void addLibraryEntry(Library libraryE) {
		sessionfact.getCurrentSession().saveOrUpdate(libraryE);
		
	}

	@Override
	public Library fetchLibraryEntryById(long LibraryId) {
		
		Library libraryE= sessionfact.getCurrentSession().get(Library.class, LibraryId);
		return libraryE;
	}

	@Override
	public Library fetchLibraryEntryByTitle(String title) {
		Library libraryE= sessionfact.getCurrentSession().get(Library.class, title);
		return libraryE;
	}

	@Override
	public List<Library> getAllLibraryEntries() {
		List<Library> entireLibrary =new ArrayList<>();
		Query query= sessionfact.getCurrentSession().createQuery("from Library");
		
		entireLibrary=(ArrayList<Library>)query.getResultList();
		return entireLibrary;
	}


}

