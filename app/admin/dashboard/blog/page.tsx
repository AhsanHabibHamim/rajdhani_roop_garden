'use client'

import { useEffect, useState } from 'react'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  category: string
  published_at: string
  read_time: number
  tags: string
}

export default function BlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [editing, setEditing] = useState<BlogPost | null>(null)
  const [form, setForm] = useState({ title: '', slug: '', excerpt: '', content: '', image: '', author: 'Rajdhani Design Team', category: 'Design', publishedAt: '', readTime: 5, tags: '' })

  useEffect(() => {
    fetch('/api/admin/blog').then(r => r.json()).then(setPosts)
  }, [])

  function resetForm() {
    setForm({ title: '', slug: '', excerpt: '', content: '', image: '', author: 'Rajdhani Design Team', category: 'Design', publishedAt: '', readTime: 5, tags: '' })
    setEditing(null)
  }

  function editPost(post: BlogPost) {
    setEditing(post)
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      author: post.author,
      category: post.category,
      publishedAt: post.published_at,
      readTime: post.read_time,
      tags: JSON.parse(post.tags || '[]').join(', '),
    })
  }

  async function save(e: React.FormEvent) {
    e.preventDefault()
    const body = {
      ...form,
      id: editing?.id || crypto.randomUUID(),
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
    }

    if (editing) {
      await fetch(`/api/admin/blog/${editing.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } else {
      await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    }

    resetForm()
    const updated = await fetch('/api/admin/blog').then(r => r.json())
    setPosts(updated)
  }

  async function deletePost(id: string) {
    if (!confirm('Delete this post?')) return
    await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' })
    setPosts(posts.filter(p => p.id !== id))
  }

  async function refresh() {
    const updated = await fetch('/api/admin/blog').then(r => r.json())
    setPosts(updated)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif-heading text-cream">Blog Posts</h1>
        <button onClick={refresh} className="text-sm px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 transition-colors font-accent tracking-wider">Refresh</button>
      </div>

      <form onSubmit={save} className="bg-cream/5 rounded-xl p-6 mb-8 border border-gold/10 space-y-4">
        <h2 className="text-lg font-serif-heading text-gold mb-2">{editing ? 'Edit Post' : 'Add New Post'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" required />
          <input placeholder="Slug" value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" required />
          <input placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" />
          <input placeholder="Author" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" />
          <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" />
          <input type="date" placeholder="Published Date" value={form.publishedAt} onChange={e => setForm({ ...form, publishedAt: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" />
          <input type="number" placeholder="Read Time (min)" value={form.readTime} onChange={e => setForm({ ...form, readTime: +e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" />
          <input placeholder="Tags (comma separated)" value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" />
        </div>
        <textarea placeholder="Excerpt" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60 h-20" required />
        <textarea placeholder="Content" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60 h-32" />
        <div className="flex gap-3">
          <button type="submit" className="px-6 py-2.5 bg-gold text-forest-dark rounded-lg font-accent tracking-wider hover:bg-gold-light transition-colors">{editing ? 'Update' : 'Create'}</button>
          {editing && <button type="button" onClick={resetForm} className="px-6 py-2.5 bg-cream/10 text-cream rounded-lg font-accent tracking-wider hover:bg-cream/20 transition-colors">Cancel</button>}
        </div>
      </form>

      <div className="space-y-3">
        {posts.map(post => (
          <div key={post.id} className="bg-cream/5 rounded-xl p-5 border border-gold/10 flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-cream font-serif-heading text-lg truncate">{post.title}</h3>
              <p className="text-cream/50 text-sm mt-1 truncate">{post.excerpt}</p>
              <div className="flex gap-3 mt-2 text-xs text-cream/40">
                <span>{post.category}</span>
                <span>{post.published_at}</span>
              </div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => editPost(post)} className="px-3 py-1.5 text-xs bg-gold/20 text-gold rounded-lg hover:bg-gold/30 transition-colors">Edit</button>
              <button onClick={() => deletePost(post.id)} className="px-3 py-1.5 text-xs bg-red-400/20 text-red-400 rounded-lg hover:bg-red-400/30 transition-colors">Delete</button>
            </div>
          </div>
        ))}
        {posts.length === 0 && <p className="text-cream/40 text-center py-8">No blog posts yet.</p>}
      </div>
    </div>
  )
}
