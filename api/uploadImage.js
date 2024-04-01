export const uploadImage = async data => {
    const url = "https://api.cloudinary.com/v1_1/dnjy2sl4j/image/upload";

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data
        });
  
        const datares = await response.json();
        return datares;
    } catch (error) {
        return {
            mess : `Error uploading image: ${error}`
        }
    }
}