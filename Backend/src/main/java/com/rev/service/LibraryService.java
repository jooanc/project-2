package com.rev.service;

import java.util.List;


import com.rev.entity.Library;

public interface LibraryService {

    public Library getLibraryEntryByTitle(String title);
    public Library getLibraryEntryById(long LibraryEId);
	List<Library> listEntireLibrary();
	void createLibraryEntry(Library libraryE);

}
