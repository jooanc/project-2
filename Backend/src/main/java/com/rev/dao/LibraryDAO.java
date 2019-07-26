package com.rev.dao;

import java.util.List;

import com.rev.entity.Library;

public interface LibraryDAO {

	public void addLibraryEntry(Library libraryE);
	public Library fetchLibraryEntryById(long LibraryEId);
	public Library fetchLibraryEntryByTitle(String title);
	List<Library> getAllLibraryEntries();
}
