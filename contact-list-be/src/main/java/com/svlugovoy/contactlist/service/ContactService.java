package com.svlugovoy.contactlist.service;

import com.svlugovoy.contactlist.model.Contact;
import com.svlugovoy.contactlist.repository.ContactRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public List<Contact> getAllContacts(){
        return contactRepository.findAll();
    }

    public Optional<Contact> getContactById(Long id){
        return contactRepository.findById(id);
    }

    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public void deleteContactById(Long id) {
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact with specified ID not found in database"));
        contactRepository.delete(contact);
    }

    public Contact updateContact(Contact contact) {
        Contact updated = contactRepository.findById(contact.getId())
                .orElseThrow(() -> new RuntimeException("Contact with specified ID not found in database"));
        return contactRepository.save(updated);
    }
}
