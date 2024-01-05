const importFile = async (filePath) => {
  try {
    const module = await import(filePath);
    return module.default; // Assuming the file has a default export
  } catch (error) {
    console.error(`Error importing file ${filePath}:`, error);
    throw error;
  }
};

export default importFile;
