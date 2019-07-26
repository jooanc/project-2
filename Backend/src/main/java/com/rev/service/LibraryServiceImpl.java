package com.rev.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.dao.LibraryDAOImpl;

import com.rev.entity.Library;

@Service("libraryService")
public class LibraryServiceImpl implements LibraryService{

	@Autowired
	LibraryDAOImpl ld;

	@Override
	@Transactional
	public Library getLibraryEntryByTitle(String title) {
		return ld.fetchLibraryEntryByTitle(title);
	}
	@Override
	@Transactional
	public Library getLibraryEntryById(long LibraryEId) {
		return ld.fetchLibraryEntryById(LibraryEId);
	}
	@Override
	@Transactional
	public List<Library> listEntireLibrary() {
		List<Library> library=ld.getAllLibraryEntries();
		return library;
	}
	@Override
	@Transactional
	public void createLibraryEntry(Library libraryE) {
		ld.addLibraryEntry(libraryE);
		
	}

}
