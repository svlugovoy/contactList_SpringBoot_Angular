package com.svlugovoy.contactlist.controller;

import com.svlugovoy.contactlist.model.Contact;
import com.svlugovoy.contactlist.service.ContactService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/v1/contacts")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping
    public List<Contact> getAll() {
        return contactService.getAllContacts();
    }

    @GetMapping("/{id}")
    public Contact getById(@PathVariable Long id) {
        return contactService.getContactById(id).get();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Contact saveNew(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) {
        contactService.deleteContactById(id);
    }

    @PutMapping("/{id}")
    public Contact update(@PathVariable Long id, @RequestBody Contact contact) {
        if (!Objects.equals(id, contact.getId())) {
            throw new IllegalStateException("Id parameter does not match account body value");
        }
        return contactService.updateContact(contact);
    }

}
