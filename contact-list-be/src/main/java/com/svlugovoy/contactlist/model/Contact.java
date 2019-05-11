package com.svlugovoy.contactlist.model;

import lombok.*;

import javax.persistence.*;

import java.time.LocalDate;

import static javax.persistence.GenerationType.IDENTITY;

@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode(of = "id")
@Entity
@Table(name = "contacts")
public class Contact {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    private String email;

    @Column(nullable = false)
    private String phone;

    private String gender;

    private LocalDate dob;

    private String city;

    private String state;

    private String country;

    @Column(name = "image_url")
    private String imageUrl;

}
