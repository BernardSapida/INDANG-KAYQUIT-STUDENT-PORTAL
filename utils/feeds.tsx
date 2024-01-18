import { faker } from '@faker-js/faker';

export const generateFullname = (sex: ("male" | "female")): string => {
    const fullname = `${faker.person.firstName(sex)} ${faker.person.lastName(sex)}`;
    return fullname;
}

export const generateSex = (): ("male" | "female") => {
    const sex = Math.floor(Math.random() * 2) == 0 ? "male" : "female";
    return sex;
}

export const generateAddress = (): string => {
    const street = faker.location.streetAddress(true);
    return street;
}

export const generateReligion = (): string => {
    const religion = [
        "Agnosticism",
        "Atheism",
        "Bahai",
        "Buddhism",
        "Christianity",
        "Confucianism",
        "Hinduism",
        "Humanism",
        "Indigenous",
        "Islam",
        "Jainism",
        "Judaism",
        "Newage",
        "Rastafarianism",
        "Roman_catholicism",
        "Scientology",
        "Shintoism",
        "Sikhism",
        "Taoism",
        "Wicca",
        "Zoroastrianism"
    ][Math.floor(Math.random() * 21)];

    return religion;
}

export const generateContact = (): string => {
    const contact = Math.floor(Math.random() * 100000000) + 99999999;
    return "09" + contact.toString();
}

export const generateBirthdate = (): string => {
    const year = (Math.floor(Math.random() * 17) + 1).toString().padStart(4, "200");
    const month = (Math.floor(Math.random() * 12) + 1).toString().padStart(2, "0");
    const day = (Math.floor(Math.random() * 28) + 1).toString().padStart(2, "0");

    return `${year} - ${month} - ${day}`;
}

export const generateLRN = (lrn: number): string => {
    const year = "2017";
    const studentUID = lrn.toString();

    return year + studentUID.padStart(5, "0");
}

export const generateGrade = (): number => {
    return Math.floor(Math.random() * 24) + 75;
}

export const generatePassword = (length = 12, useDigits = true, useSpecialChars = true) => {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = useDigits ? '0123456789' : '';
    const specialChars = useSpecialChars ? '!@#$%^&*()_-+=<>?/' : '';

    const allChars = lowercaseLetters + uppercaseLetters + digits + specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}

export const generateStudentEmail = (studentFullname: string) => {
    const studentEmail = studentFullname.replace(" ", ".") + "@kayquit.edu.ph";
    return studentEmail.toLowerCase();
}

export const generateGradeLevel = (gradeLevel: number) => {
    if (gradeLevel != 0) return gradeLevel.toString();

    return "Kinder";
}

export const capitalize = (word: string): string => {
    return word[0].toUpperCase() + word.slice(1,);
}