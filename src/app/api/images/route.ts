import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const imagesDirectory = path.join(process.cwd(), 'public/images/loja');

        // Ensure directory exists
        if (!fs.existsSync(imagesDirectory)) {
            return NextResponse.json({ images: [] });
        }

        const files = fs.readdirSync(imagesDirectory);

        // Filter for image files only
        const images = files.filter(file =>
            /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        ).map(file => `/images/loja/${file}`);

        return NextResponse.json({ images });
    } catch (error) {
        console.error('Error reading image directory:', error);
        return NextResponse.json({ error: 'Failed to list images' }, { status: 500 });
    }
}
