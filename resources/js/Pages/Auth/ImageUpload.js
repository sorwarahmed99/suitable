import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';

const ImageUpload = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [images, setImages] = useState([]);
    const { post } = useForm();

    const handleImageChange = (e) => {
        const newImages = [...e.target.files];
        setImages(newImages);

        // Display the first selected image as a preview
        if (newImages.length > 0) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImagePreview(event.target.result);
            };
            reader.readAsDataURL(newImages[0]);
        } else {
            setImagePreview(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        images.forEach((image) => {
            formData.append('images[]', image);
        });

        await post('/upload', formData);
    };

    return (
        <div className="container mx-auto p-4">
            <form method="post" onSubmit={handleSubmit} enctype="multipart/formData">
                <div className="mb-4">
                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Image Preview"
                            className="mb-2 rounded-lg max-w-xs"
                            h-10
                        />
                    )}
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="images">
                        Select Images
                    </label>
                    <input
                        type="file"
                        name="images"
                        id="images"
                        multiple
                        onChange={handleImageChange}
                        accept="image/*"
                        className="w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Upload Images
                </button>
            </form>
        </div>
    );
};

export default ImageUpload;
