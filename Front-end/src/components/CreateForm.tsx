import React, { useState } from "react";
import fetch from "cross-fetch";
import axios from "axios";

type Characters = {
	name: string;
	lastName: string;
	age: number;
	gender: string;
	sexualOrientation: string;
	race: string;
	skinColor: string;
	bodyType: string;
	eyeColor: string;
	hairColor: string;
	height: number;
	weight: number;
	description: string;
	// traits: string;
	// strengths: string;
	// weaknesses: string;
	image: string;
	status: string;
	birthplace: string;
	nationality: string;
	occupation: string;
	class: string;
};

function CreateForm() {
	const [character, setCharacter] = useState<Characters>({
		name: "",
		lastName: "",
		age: 0,
		gender: "",
		sexualOrientation: "",
		race: "",
		skinColor: "",
		bodyType: "",
		eyeColor: "",
		hairColor: "",
		height: 0,
		weight: 0,
		description: "",
		// traits: "",
		// strengths: "",
		// weaknesses: "",
		image: "",
		status: "",
		birthplace: "",
		nationality: "",
		occupation: "",
		class: "",
	});

	const [imageFile, setImageFile] = useState<File | null>(null);
	const [error, setError] = useState(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setImageFile(file);
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.result) {
					setCharacter((prevCharacter) => ({
						...prevCharacter,
						image: reader.result as string,
					}));
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const characterData = {
			...character,
			image: imageFile ? await toBase64(imageFile) : null,
		};

		try {
			const response = await fetch("http://localhost:5000/api/characters", {
				method: "POST",
				headers: {
					"Content-Type": "multipart/form-data",
				},
				body: JSON.stringify(characterData),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
		} catch (error) {
			console.log("error.response", error.response);
			setError(getResponseError(error));
		}
	};

	const toBase64 = (file: File) =>
		new Promise<string>((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () =>
				resolve(reader.result?.toString().split(",")[1] || "");
			reader.onerror = (error) => reject(error);
		});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setCharacter((prevCharacter) => ({ ...prevCharacter, [name]: value }));
	};

	const getResponseError = (error: any) => {
		if (error === null || error === undefined) {
			return null;
		}

		if (error.response) {
			if (error.response.status === 400 && error.response.data) {
				const responseErrors = error.response.data.errors;
				if (responseErrors) {
					const errorData = {};
					for (const errorItem of responseErrors) {
						errorData[errorItem.field] = errorItem.defaultMessage;
					}
					return errorData;
				}
				return null;
			}
		}
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Create Character</h1>
			<form className="space-y-4" onSubmit={handleSubmit}>
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700">
						Name
					</label>
					<input
						type="text"
						name="name"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.name}
					/>
				</div>
				<div>
					<label
						htmlFor="lastName"
						className="block text-sm font-medium text-gray-700">
						Last Name
					</label>
					<input
						type="text"
						name="lastName"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.lastName}
					/>
				</div>
				<div>
					<label
						htmlFor="age"
						className="block text-sm font-medium text-gray-700">
						Age
					</label>
					<input
						type="text"
						name="age"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.age}
					/>
				</div>
				<div>
					<label
						htmlFor="gender"
						className="block text-sm font-medium text-gray-700">
						Gender
					</label>
					<input
						type="text"
						name="gender"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.gender}
					/>
				</div>
				<div>
					<label
						htmlFor="sexualOrientation"
						className="block text-sm font-medium text-gray-700">
						Sexual Orientation
					</label>
					<input
						type="text"
						name="sexualOrientation"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.sexualOrientation}
					/>
				</div>
				<div>
					<label
						htmlFor="race"
						className="block text-sm font-medium text-gray-700">
						Race
					</label>
					<input
						type="text"
						name="race"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.race}
					/>
				</div>
				<div>
					<label
						htmlFor="skinColor"
						className="block text-sm font-medium text-gray-700">
						Skin Color
					</label>
					<input
						type="text"
						name="skinColor"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.skinColor}
					/>
				</div>
				<div>
					<label
						htmlFor="bodyType"
						className="block text-sm font-medium text-gray-700">
						Body Type
					</label>
					<input
						type="text"
						name="bodyType"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.bodyType}
					/>
				</div>
				<div>
					<label
						htmlFor="eyeColor"
						className="block text-sm font-medium text-gray-700">
						Eye Color
					</label>
					<input
						type="text"
						name="eyeColor"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.eyeColor}
					/>
				</div>
				<div>
					<label
						htmlFor="hairColor"
						className="block text-sm font-medium text-gray-700">
						Hair Color
					</label>
					<input
						type="text"
						name="hairColor"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.hairColor}
					/>
				</div>
				<div>
					<label
						htmlFor="height"
						className="block text-sm font-medium text-gray-700">
						Height
					</label>
					<input
						type="number"
						name="height"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.height}
					/>
				</div>
				<div>
					<label
						htmlFor="weight"
						className="block text-sm font-medium text-gray-700">
						Weight
					</label>
					<input
						type="number"
						name="weight"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.weight}
					/>
				</div>
				<div>
					<label
						htmlFor="description"
						className="block text-sm font-medium text-gray-700">
						Description
					</label>
					<input
						type="text"
						name="description"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.description}
					/>
				</div>
				{/* <div>
					<label
						htmlFor="traits"
						className="block text-sm font-medium text-gray-700">
						Traits
					</label>
					<input
						type="text"
						name="traits"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.traits}
					/>
				</div>
				<div>
					<label
						htmlFor="strengths"
						className="block text-sm font-medium text-gray-700">
						Strengths
					</label>
					<input
						type="text"
						name="strengths"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.strengths}
					/>
				</div>
				<div>
					<label
						htmlFor="weaknesses"
						className="block text-sm font-medium text-gray-700">
						Weaknesses
					</label>
					<input
						type="text"
						name="weaknesses"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.weaknesses}
					/>
				</div> */}
				<div>
					<label
						htmlFor="image"
						className="block text-sm font-medium text-gray-700">
						Image
					</label>
					<input
						type="file"
						name="image"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleFileChange}
					/>
				</div>
				<div>
					<label
						htmlFor="status"
						className="block text-sm font-medium text-gray-700">
						Status
					</label>
					<input
						type="text"
						name="status"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.status}
					/>
				</div>
				<div>
					<label
						htmlFor="birthplace"
						className="block text-sm font-medium text-gray-700">
						Birthplace
					</label>
					<input
						type="text"
						name="birthplace"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.birthplace}
					/>
				</div>
				<div>
					<label
						htmlFor="nationality"
						className="block text-sm font-medium text-gray-700">
						Nationality
					</label>
					<input
						type="text"
						name="nationality"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.nationality}
					/>
				</div>
				<div>
					<label
						htmlFor="occupation"
						className="block text-sm font-medium text-gray-700">
						Occupation
					</label>
					<input
						type="text"
						name="occupation"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.occupation}
					/>
				</div>
				<div>
					<label
						htmlFor="class"
						className="block text-sm font-medium text-gray-700">
						Class
					</label>
					<input
						type="text"
						name="class"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
						onChange={handleChange}
						value={character.class}
					/>
				</div>
				<button
					type="submit"
					className="mt-4 bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600">
					Submit
				</button>
				{error && (
					<div className="mt-4 text-red-500">
						<p>{error}</p>
					</div>
				)}
			</form>
		</div>
	);
}

export default CreateForm;
