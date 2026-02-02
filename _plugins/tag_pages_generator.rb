module Jekyll
  class TagPage < Page
    def initialize(site, base, name, url, layout = 'tag')
      @site = site
      @base = base
      @dir = url.sub(/^\//, '').sub(/\/$/, '') # Remove leading/trailing slashes
      @name = 'index.html'

      self.process(@name)
      self.data = {
        'layout' => layout,
        'title' => name,
        'permalink' => url
      }
    end
  end

  class TagPagesGenerator < Generator
    safe true
    priority :low

    def generate(site)
      tags_data = site.data['tags']
      return unless tags_data

      tags_data.each do |tag|
        # Generate main tag page
        site.pages << TagPage.new(site, site.source, tag['name'], tag['url'])

        # Generate sub_tag pages
        if tag['sub_tags']
          tag['sub_tags'].each do |sub_tag|
            site.pages << TagPage.new(site, site.source, sub_tag['name'], sub_tag['url'])
          end
        end
      end
    end
  end
end
