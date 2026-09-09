import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) return [];
  
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" or ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx?$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Auto-extract missing metadata
    let { title, date, description, tags } = matterResult.data;
    
    if (!title) {
      // First try to extract from H1
      const match = fileContents.match(/^#\s+(.*)/m);
      // Fallback to filename
      title = match ? match[1] : id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    
    if (!date) {
      const stat = fs.statSync(fullPath);
      date = stat.birthtime.toISOString().split('T')[0];
    }
    
    if (!description) {
      // Find first paragraph (text not starting with #, >, or -, and not empty)
      const paragraphs = fileContents.split('\n\n').filter(p => p.trim() && !p.startsWith('#') && !p.startsWith('>') && !p.startsWith('-') && !p.startsWith('`'));
      description = paragraphs.length > 0 ? paragraphs[0].substring(0, 150) + '...' : '';
    }

    // Combine the data with the id
    return {
      id,
      title,
      date,
      description,
      tags: tags || [],
      ...matterResult.data,
    };
  });
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx?$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const decodedId = decodeURIComponent(id);
  const mdxPath = path.join(postsDirectory, `${decodedId}.mdx`);
  const mdPath = path.join(postsDirectory, `${decodedId}.md`);
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Auto-extract missing metadata for the single post view
  let { title, date } = matterResult.data;
  
  if (!title) {
    // First try to extract from H1
    const match = fileContents.match(/^#\s+(.*)/m);
    // Fallback to decoded filename
    title = match ? match[1] : decodedId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
  
  if (!date) {
    const stat = fs.statSync(fullPath);
    date = stat.birthtime.toISOString().split('T')[0];
  }

  // Remove the first H1 heading from the markdown content so it doesn't duplicate the page title
  const cleanContent = matterResult.content.replace(/^#\s+.*(\r?\n|$)/m, '');

  // Combine the data with the id and clean content
  return {
    id,
    content: cleanContent,
    title,
    date,
    ...matterResult.data,
  };
}
