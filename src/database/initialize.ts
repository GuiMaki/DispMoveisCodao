import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { UserRepositories } from "../repositories/UserRepositories";

export async function initialize() {
    await createDefaultUser();
}

async function createDefaultUser() {
    const userRepository = getCustomRepository(UserRepositories);

    const defaultUserEmail = "makiyamagui@gmail.com";
    const userAlreadyExists = await userRepository.findOne({ email: defaultUserEmail });

    if (!userAlreadyExists) {
        const passwordHash = await hash("Senha123", 8);

        const user = userRepository.create({
            name: "Guilherme Makiyama",
            email: defaultUserEmail,
            admin: true,
            password: passwordHash,
        });

        await userRepository.save(user);
    }
}
